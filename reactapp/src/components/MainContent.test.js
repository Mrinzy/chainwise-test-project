import React from 'react';
import ReactDOM from 'react-dom'
import MainComponent from './MainContent'
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { Eosdata } from '../helpers/helper';
import { wrap } from 'module';
Enzyme.configure({ adapter: new Adapter() })


describe('Main Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MainComponent />, div)
    });
})


//-----------------------------------------------------------------------------------------
jest.mock('axios')

describe('API Call', () => {
    it('fetches from API', async () => {
        const data = {
            "account_name": "genialwombat",
            "head_block_num": 105940526,
            "head_block_time": "2020-02-19T06:38:30.500",
            "privileged": false,
            "last_code_update": "2019-12-16T09:18:46.500",
            "created": "2019-04-25T08:09:21.500",
            "core_liquid_balance": "4677.8305 EOS",
            "ram_quota": 2217255,
            "net_weight": 1000,
            "cpu_weight": 1001008,
            "net_limit": {
                "used": 265,
                "available": 101950,
                "max": 102215
            },
            "cpu_limit": {
                "used": 1208,
                "available": 8164,
                "max": 9372
            },
            "ram_usage": 1155316,
            "permissions": [
                {
                    "perm_name": "active",
                    "parent": "owner",
                    "required_auth": {
                        "threshold": 1,
                        "keys": [
                            {
                                "key": "EOS6a9CiWhhq1cN3n6Dn6AjLpshAP7MAdQiTf98411DGR6qCZvBsx",
                                "weight": 1
                            }
                        ],
                        "accounts": [
                            {
                                "permission": {
                                    "actor": "genialwombat",
                                    "permission": "eosio.code"
                                },
                                "weight": 1
                            }
                        ],
                        "waits": []
                    }
                },
                {
                    "perm_name": "msig",
                    "parent": "active",
                    "required_auth": {
                        "threshold": 1,
                        "keys": [
                            {
                                "key": "EOS8KYAgkbZFvZzdBYqbTDXmiN783D1cBLYVf8fphRXxw4L3zDgkS",
                                "weight": 1
                            }
                        ],
                        "accounts": [],
                        "waits": []
                    }
                },
                {
                    "perm_name": "ops",
                    "parent": "active",
                    "required_auth": {
                        "threshold": 1,
                        "keys": [
                            {
                                "key": "EOS77CKUbsYgQYuno5YtQxf9szZDXMeffvex9bTevRYaXanDeVn51",
                                "weight": 1
                            }
                        ],
                        "accounts": [],
                        "waits": []
                    }
                },
                {
                    "perm_name": "owner",
                    "parent": "",
                    "required_auth": {
                        "threshold": 1,
                        "keys": [
                            {
                                "key": "EOS72rwufcJNbfmLn7F15idfvSdHgSMjQr5wJajJSebDeUw5XKS1m",
                                "weight": 1
                            }
                        ],
                        "accounts": [],
                        "waits": []
                    }
                }
            ],

            "total_resources": {
                "owner": "genialwombat",
                "net_weight": "0.1000 EOS",
                "cpu_weight": "100.1008 EOS",
                "ram_bytes": 2215855
            },
            "self_delegated_bandwidth": {
                "from": "genialwombat",
                "to": "genialwombat",
                "net_weight": "0.0000 EOS",
                "cpu_weight": "100.0008 EOS"
            },
            "refund_request": null,
            "voter_info": {
                "owner": "genialwombat",
                "proxy": "proxy4nation",
                "producers": [],
                "staked": 24448008,
                "last_vote_weight": "29290971487125.71875000000000000",
                "proxied_vote_weight": "667159920527.92456054687500000",
                "is_proxy": 0,
                "flags1": 0,
                "reserved2": 0,
                "reserved3": "0 "
            },
            "rex_info": null
        }
        axios.post.mockImplementationOnce(() => Promise.resolve(data))
        await expect(Eosdata({ account_name: "genialwombat" })).resolves.toEqual(data)
        expect(axios.post).toHaveBeenCalledWith('https://api.eosn.io/v1/chain/get_account', { account_name: "genialwombat" })
    })
})
//-----------------------------------------------------------------------------------------