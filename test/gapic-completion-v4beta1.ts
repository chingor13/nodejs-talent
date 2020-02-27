// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import { describe, it } from 'mocha';
const completionModule = require('../src');


const FAKE_STATUS_CODE = 1;
class FakeError{
    name: string;
    message: string;
    code: number;
    constructor(n: number){
        this.name = 'fakeName';
        this.message = 'fake message';
        this.code = n;
    }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError|null, response?: {} | null): void;
}

export class Operation{
    constructor(){};
    promise() {};
}
function mockSimpleGrpcMethod(expectedRequest: {}, response: {} | null, error: FakeError | null) {
    return (actualRequest: {}, options: {}, callback: Callback) => {
        assert.deepStrictEqual(actualRequest, expectedRequest);
        if (error) {
            callback(error);
        } else if (response) {
            callback(null, response);
        } else {
            callback(null);
        }
    };
}
describe('v4beta1.CompletionClient', () => {
    it('has servicePath', () => {
        const servicePath = completionModule.v4beta1.CompletionClient.servicePath;
        assert(servicePath);
    });
    it('has apiEndpoint', () => {
        const apiEndpoint = completionModule.v4beta1.CompletionClient.apiEndpoint;
        assert(apiEndpoint);
    });
    it('has port', () => {
        const port = completionModule.v4beta1.CompletionClient.port;
        assert(port);
        assert(typeof port === 'number');
    });
    it('should create a client with no option', () => {
        const client = new completionModule.v4beta1.CompletionClient();
        assert(client);
    });
    it('should create a client with gRPC fallback', () => {
        const client = new completionModule.v4beta1.CompletionClient({
            fallback: true,
        });
        assert(client);
    });
    describe('completeQuery', () => {
        it('invokes completeQuery without error', done => {
            const client = new completionModule.v4beta1.CompletionClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.talent.v4beta1.ICompleteQueryRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.completeQuery = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.completeQuery(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes completeQuery with error', done => {
            const client = new completionModule.v4beta1.CompletionClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.talent.v4beta1.ICompleteQueryRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.completeQuery = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.completeQuery(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
});
