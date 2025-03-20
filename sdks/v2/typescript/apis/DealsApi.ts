// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateDealNoteRequest } from '../models/CreateDealNoteRequest';
import { DealNote } from '../models/DealNote';
import { DealNoteListResponse } from '../models/DealNoteListResponse';
import { UpdateDealNoteRequest } from '../models/UpdateDealNoteRequest';

/**
 * no description
 */
export class DealsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param id the deal ID to associate the new note with
     * @param createDealNoteRequest the request body containing note details
     */
    public async createNote(id: string, createDealNoteRequest: CreateDealNoteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DealsApi", "createNote", "id");
        }


        // verify required parameter 'createDealNoteRequest' is not null or undefined
        if (createDealNoteRequest === null || createDealNoteRequest === undefined) {
            throw new RequiredError("DealsApi", "createNote", "createDealNoteRequest");
        }


        // Path Params
        const localVarPath = '/v2/deals/{id}/notes'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createDealNoteRequest, "CreateDealNoteRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param noteId the ID of the note to delete
     */
    public async deleteNote(noteId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'noteId' is not null or undefined
        if (noteId === null || noteId === undefined) {
            throw new RequiredError("DealsApi", "deleteNote", "noteId");
        }


        // Path Params
        const localVarPath = '/v2/deals/-/notes/{note_id}'
            .replace('{' + 'note_id' + '}', encodeURIComponent(String(noteId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param noteId the ID of the note to retrieve
     */
    public async getNote(noteId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'noteId' is not null or undefined
        if (noteId === null || noteId === undefined) {
            throw new RequiredError("DealsApi", "getNote", "noteId");
        }


        // Path Params
        const localVarPath = '/v2/deals/-/notes/{note_id}'
            .replace('{' + 'note_id' + '}', encodeURIComponent(String(noteId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all notes associated with a specific deal.
     * Lists all notes associated with a specific deal.
     * @param id the deal ID to list notes for
     * @param filter 
     * @param pageToken 
     * @param orderBy 
     * @param pageSize 
     */
    public async listNotes(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DealsApi", "listNotes", "id");
        }






        // Path Params
        const localVarPath = '/v2/deals/{id}/notes'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("page_token", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param noteId the ID of the note to update
     * @param updateDealNoteRequest the request body containing updated note details
     */
    public async updateNote(noteId: string, updateDealNoteRequest: UpdateDealNoteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'noteId' is not null or undefined
        if (noteId === null || noteId === undefined) {
            throw new RequiredError("DealsApi", "updateNote", "noteId");
        }


        // verify required parameter 'updateDealNoteRequest' is not null or undefined
        if (updateDealNoteRequest === null || updateDealNoteRequest === undefined) {
            throw new RequiredError("DealsApi", "updateNote", "updateDealNoteRequest");
        }


        // Path Params
        const localVarPath = '/v2/deals/-/notes/{note_id}'
            .replace('{' + 'note_id' + '}', encodeURIComponent(String(noteId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateDealNoteRequest, "UpdateDealNoteRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DealsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNote
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNoteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DealNote >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DealNote = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DealNote", ""
            ) as DealNote;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DealNote = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DealNote", ""
            ) as DealNote;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNote
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteNoteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNote
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNoteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DealNote >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DealNote = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DealNote", ""
            ) as DealNote;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DealNote = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DealNote", ""
            ) as DealNote;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNotes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listNotesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DealNoteListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DealNoteListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DealNoteListResponse", ""
            ) as DealNoteListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DealNoteListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DealNoteListResponse", ""
            ) as DealNoteListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateNote
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateNoteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DealNote >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DealNote = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DealNote", ""
            ) as DealNote;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DealNote = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DealNote", ""
            ) as DealNote;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
