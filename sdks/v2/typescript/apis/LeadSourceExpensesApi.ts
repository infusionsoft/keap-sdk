// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateLeadSourceExpenseRequest } from '../models/CreateLeadSourceExpenseRequest';
import { LeadSourceExpense } from '../models/LeadSourceExpense';
import { ListLeadSourceExpensesResponse } from '../models/ListLeadSourceExpensesResponse';
import { UpdateLeadSourceExpenseRequest } from '../models/UpdateLeadSourceExpenseRequest';

/**
 * no description
 */
export class LeadSourceExpensesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param createLeadSourceExpenseRequest The request object to create a new lead source expense
     */
    public async createLeadSourceExpenseUsingPOST(leadSourceId: string, createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "createLeadSourceExpenseUsingPOST", "leadSourceId");
        }


        // verify required parameter 'createLeadSourceExpenseRequest' is not null or undefined
        if (createLeadSourceExpenseRequest === null || createLeadSourceExpenseRequest === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "createLeadSourceExpenseUsingPOST", "createLeadSourceExpenseRequest");
        }


        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/expenses'
            .replace('{' + 'lead_source_id' + '}', encodeURIComponent(String(leadSourceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createLeadSourceExpenseRequest, "CreateLeadSourceExpenseRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public async deleteLeadSourceUsingDELETE1(leadSourceExpenseId: string, leadSourceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceExpenseId' is not null or undefined
        if (leadSourceExpenseId === null || leadSourceExpenseId === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "deleteLeadSourceUsingDELETE1", "leadSourceExpenseId");
        }


        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "deleteLeadSourceUsingDELETE1", "leadSourceId");
        }


        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id}'
            .replace('{' + 'lead_source_expense_id' + '}', encodeURIComponent(String(leadSourceExpenseId)))
            .replace('{' + 'lead_source_id' + '}', encodeURIComponent(String(leadSourceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public async getLeadSourceExpenseUsingGET(leadSourceExpenseId: string, leadSourceId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceExpenseId' is not null or undefined
        if (leadSourceExpenseId === null || leadSourceExpenseId === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "getLeadSourceExpenseUsingGET", "leadSourceExpenseId");
        }


        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "getLeadSourceExpenseUsingGET", "leadSourceId");
        }


        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id}'
            .replace('{' + 'lead_source_expense_id' + '}', encodeURIComponent(String(leadSourceExpenseId)))
            .replace('{' + 'lead_source_id' + '}', encodeURIComponent(String(leadSourceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves a list of lead source expenses
     * List Lead Source Expenses
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param filter Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param orderBy Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param pageSize Total number of items to return per page
     * @param pageToken Page token
     */
    public async listLeadSourceExpensesUsingGET(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "listLeadSourceExpensesUsingGET", "leadSourceId");
        }






        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/expenses'
            .replace('{' + 'lead_source_id' + '}', encodeURIComponent(String(leadSourceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("page_token", ObjectSerializer.serialize(pageToken, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param updateLeadSourceExpenseRequest The request object to update a lead source expense
     * @param updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public async updateLeadSourceExpenseUsingPATCH(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceExpenseId' is not null or undefined
        if (leadSourceExpenseId === null || leadSourceExpenseId === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "updateLeadSourceExpenseUsingPATCH", "leadSourceExpenseId");
        }


        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "updateLeadSourceExpenseUsingPATCH", "leadSourceId");
        }


        // verify required parameter 'updateLeadSourceExpenseRequest' is not null or undefined
        if (updateLeadSourceExpenseRequest === null || updateLeadSourceExpenseRequest === undefined) {
            throw new RequiredError("LeadSourceExpensesApi", "updateLeadSourceExpenseUsingPATCH", "updateLeadSourceExpenseRequest");
        }



        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id}'
            .replace('{' + 'lead_source_expense_id' + '}', encodeURIComponent(String(leadSourceExpenseId)))
            .replace('{' + 'lead_source_id' + '}', encodeURIComponent(String(leadSourceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updateMask !== undefined) {
            const serializedParams = ObjectSerializer.serialize(updateMask, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("update_mask", serializedParam);
            }
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateLeadSourceExpenseRequest, "UpdateLeadSourceExpenseRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class LeadSourceExpensesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLeadSourceExpenseUsingPOST
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createLeadSourceExpenseUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LeadSourceExpense >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: LeadSourceExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceExpense", ""
            ) as LeadSourceExpense;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LeadSourceExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceExpense", ""
            ) as LeadSourceExpense;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLeadSourceUsingDELETE1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteLeadSourceUsingDELETE1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Internal Server Error", body, response.headers);
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
     * @params response Response returned by the server for a request to getLeadSourceExpenseUsingGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLeadSourceExpenseUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LeadSourceExpense >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LeadSourceExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceExpense", ""
            ) as LeadSourceExpense;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LeadSourceExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceExpense", ""
            ) as LeadSourceExpense;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLeadSourceExpensesUsingGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLeadSourceExpensesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListLeadSourceExpensesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListLeadSourceExpensesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListLeadSourceExpensesResponse", ""
            ) as ListLeadSourceExpensesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListLeadSourceExpensesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListLeadSourceExpensesResponse", ""
            ) as ListLeadSourceExpensesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLeadSourceExpenseUsingPATCH
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateLeadSourceExpenseUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LeadSourceExpense >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LeadSourceExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceExpense", ""
            ) as LeadSourceExpense;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LeadSourceExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceExpense", ""
            ) as LeadSourceExpense;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
