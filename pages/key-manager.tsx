import ERC725 from '@erc725/erc725.js';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import useWeb3 from '../hooks/useWeb3';

const KeyManager: NextPage = () => {
  const [encodedPermissions, setEncodedPermissions] = useState(
    '0x0000000000000000000000000000000000000000000000000000000000000001',
  );
  const [decodedPermissions, setDecodedPermissions] = useState<
    Record<string, boolean>
  >({
    CHANGEOWNER: true,
    CHANGEPERMISSIONS: false,
    ADDPERMISSIONS: false,
    SETDATA: false,
    CALL: false,
    STATICCALL: false,
    DELEGATECALL: false,
    DEPLOY: false,
    TRANSFERVALUE: false,
    SIGN: false,
  });

  const handleEncodedPermissionChange = (input: string) => {
    try {
      // TODO: Check Validation. 32 bytes
      setEncodedPermissions(input);
      setDecodedPermissions(ERC725.decodePermissions(input));
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handlePermissionClick = (permissionName: string) => {
    const updatedDecodedPermissions = decodedPermissions;
    updatedDecodedPermissions[permissionName] =
      !updatedDecodedPermissions[permissionName];
    setDecodedPermissions(updatedDecodedPermissions);
    setEncodedPermissions(ERC725.encodePermissions(updatedDecodedPermissions));
  };

  return (
    <>
      <Head>
        <title>Key Manager - ERC725 Tools</title>
      </Head>
      <div className="container">
        <article className="message is-info">
          <div className="message-body">
            This tool will encode/decode permissions according to{' '}
            <a href="https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager">
              LSP6 KeyManager Standard
            </a>{' '}
            smart contract and attempt to match them with their{' '}
            <a href="https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md">
              LSP2 ERC725YJSONSchema
            </a>
            .<br />
            The erc725.js lib provides a{' '}
            <a href="https://docs.lukso.tech/tools/erc725js/classes/ERC725#encodepermissions">
              decodePermissions
            </a>{' '}
            method to decode the permissions.
          </div>
        </article>

        <div className="columns">
          <div className="column">
            <input
              className="input is-medium"
              type="text"
              placeholder="0x0000000000000000000000000000000000000000000000000000000000000001"
              value={encodedPermissions}
              onChange={(e) => handleEncodedPermissionChange(e.target.value)}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="buttons">
              {['SETDATA', 'SIGN'].map((permission: string) => (
                <button
                  key={permission}
                  className={`button is-info ${
                    !decodedPermissions[permission] && 'is-outlined'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePermissionClick(permission);
                  }}
                >
                  {permission}
                </button>
              ))}
            </div>
            <div className="buttons">
              {[
                'STATICCALL',
                'CALL',
                'DELEGATECALL',
                'DEPLOY',
                'TRANSFERVALUE',
              ].map((permission: string) => (
                <button
                  key={permission}
                  className={`button is-warning ${
                    !decodedPermissions[permission] && 'is-outlined'
                  }`}
                  onClick={() => {
                    handlePermissionClick(permission);
                  }}
                >
                  {permission}
                </button>
              ))}
            </div>
            <div className="buttons">
              {['CHANGEOWNER', 'CHANGEPERMISSIONS', 'ADDPERMISSIONS'].map(
                (permission: string) => (
                  <button
                    key={permission}
                    className={`button is-danger ${
                      !decodedPermissions[permission] && 'is-outlined'
                    }`}
                    onClick={() => {
                      handlePermissionClick(permission);
                    }}
                  >
                    {permission}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <pre>{JSON.stringify(decodedPermissions, undefined, 2)}</pre>
          </div>
        </div>
      </div>

      <Nonce />
    </>
  );
};

const Nonce = () => {
  const web3 = useWeb3();

  const [keyManagerAddress, setKeyManagerAddress] = useState('');
  const [callerAddress, setCallerAddress] = useState('');
  const [channelId, setChannelId] = useState('');
  const [nonce, setNonce] = useState('');

  const [showNonce, setShowNonce] = useState(false);
  const [error, showError] = useState(false);

  const getNonceFromKeyManager = async () => {
    if (!web3) return;

    const keyManagerInstance = new web3.eth.Contract(
      [
        {
          inputs: [
            {
              internalType: 'address',
              name: '_from',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: '_channel',
              type: 'uint256',
            },
          ],
          name: 'getNonce',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: 'interfaceId',
              type: 'bytes4',
            },
          ],
          name: 'supportsInterface',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ],
      web3.utils.toChecksumAddress(keyManagerAddress),
    );

    const isKeyManagerV05 = await keyManagerInstance.methods
      .supportsInterface('0x6f4df48b')
      .call();

    const isKeyManagerV06 = await keyManagerInstance.methods
      .supportsInterface('0xc403d48f')
      .call();

    if (isKeyManagerV05 || isKeyManagerV06) {
      const result: any = await keyManagerInstance.methods
        .getNonce(callerAddress, channelId)
        .call();

      setNonce(result);
      setShowNonce(true);
      showError(false);
    } else {
      setShowNonce(false);
      showError(true);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="title is-2">Nonce</h1>
      <p>
        Retrieve the nonce of an <code>address</code> for a specific Key
        Manager.
      </p>
      <div className="columns mt-2">
        <div className="column">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Key Manager address"
                onChange={(e) => {
                  setKeyManagerAddress(e.target.value);
                }}
              />
              <span className="icon is-small is-left">🔐</span>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Caller address"
                onChange={(e) => setCallerAddress(e.target.value)}
              />
              <span className="icon is-small is-left">➡️ </span>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Channel ID"
                onChange={(e) => setChannelId(e.target.value)}
              />
              <span className="icon is-small is-left">🚪</span>
            </p>
          </div>
        </div>
        <div className="column">
          <button
            className="button is-success"
            onClick={async () => {
              await getNonceFromKeyManager();
            }}
          >
            Get Nonce
          </button>
        </div>
      </div>
      <div
        className="notification is-danger is-light"
        style={{ display: error ? 'block' : 'none' }}
      >
        address <code>{keyManagerAddress}</code> is not a KeyManager
      </div>
      <div
        className="notification is-success is-light"
        style={{ display: showNonce ? 'block' : 'none' }}
      >
        Nonce = <code>{nonce}</code>
      </div>
    </div>
  );
};

export default KeyManager;
