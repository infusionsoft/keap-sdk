// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateLeadSourceRecurringExpenseRequest } from '../models/CreateLeadSourceRecurringExpenseRequest';
import { LeadSourceRecurringExpense } from '../models/LeadSourceRecurringExpense';
import { LeadSourceRecurringExpenseUpdateRequest } from '../models/LeadSourceRecurringExpenseUpdateRequest';
import { ListLeadSourceExpensesResponse } from '../models/ListLeadSourceExpensesResponse';
import { ListLeadSourceRecurringExpensesResponse } from '../models/ListLeadSourceRecurringExpensesResponse';

/**
 * no description
 */
export class LeadSourceRecurringExpensesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param createLeadSourceRecurringExpenseRequest The request object to create a new lead source recurring expense
     */
    public async createLeadSourceRecurringExpenseUsingPOST(leadSourceId: string, createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "createLeadSourceRecurringExpenseUsingPOST", "leadSourceId");
        }


        // verify required parameter 'createLeadSourceRecurringExpenseRequest' is not null or undefined
        if (createLeadSourceRecurringExpenseRequest === null || createLeadSourceRecurringExpenseRequest === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "createLeadSourceRecurringExpenseUsingPOST", "createLeadSourceRecurringExpenseRequest");
        }


        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/recurringExpenses'
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
            ObjectSerializer.serialize(createLeadSourceRecurringExpenseRequest, "CreateLeadSourceRecurringExpenseRequest", ""),
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
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public async deleteLeadSourceRecurringExpenseUsingDELETE(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "deleteLeadSourceRecurringExpenseUsingDELETE", "leadSourceId");
        }


        // verify required parameter 'leadSourceRecurringExpenseId' is not null or undefined
        if (leadSourceRecurringExpenseId === null || leadSourceRecurringExpenseId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "deleteLeadSourceRecurringExpenseUsingDELETE", "leadSourceRecurringExpenseId");
        }


        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}'
            .replace('{' + 'lead_source_id' + '}', encodeURIComponent(String(leadSourceId)))
            .replace('{' + 'lead_source_recurring_expense_id' + '}', encodeURIComponent(String(leadSourceRecurringExpenseId)));

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
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public async getLeadSourceRecurringExpenseUsingGET(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "getLeadSourceRecurringExpenseUsingGET", "leadSourceId");
        }


        // verify required parameter 'leadSourceRecurringExpenseId' is not null or undefined
        if (leadSourceRecurringExpenseId === null || leadSourceRecurringExpenseId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "getLeadSourceRecurringExpenseUsingGET", "leadSourceRecurringExpenseId");
        }


        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}'
            .replace('{' + 'lead_source_id' + '}', encodeURIComponent(String(leadSourceId)))
            .replace('{' + 'lead_source_recurring_expense_id' + '}', encodeURIComponent(String(leadSourceRecurringExpenseId)));

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
     * Retrieves a list of expenses incurred from a recurring expense
     * Retrieves a list of expenses incurred from a recurring expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param filter Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param orderBy Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param pageSize Total number of items to return per page
     * @param pageToken Page token
     */
    public async listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET(leadSourceId: string, leadSourceRecurringExpenseId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET", "leadSourceId");
        }


        // verify required parameter 'leadSourceRecurringExpenseId' is not null or undefined
        if (leadSourceRecurringExpenseId === null || leadSourceRecurringExpenseId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET", "leadSourceRecurringExpenseId");
        }






        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}/expenses'
            .replace('{' + 'lead_source_id' + '}', encodeURIComponent(String(leadSourceId)))
            .replace('{' + 'lead_source_recurring_expense_id' + '}', encodeURIComponent(String(leadSourceRecurringExpenseId)));

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
     * Retrieves a list of recurring expenses with lead_source_id and optional \'filter\' query param
     * Retrieves a list of lead source recurring expenses
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param filter Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param orderBy Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param pageSize Total number of items to return per page
     * @param pageToken Page token
     */
    public async listLeadSourceRecurringExpensesUsingGET(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "listLeadSourceRecurringExpensesUsingGET", "leadSourceId");
        }






        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/recurringExpenses'
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
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param leadSourceRecurringExpenseUpdateRequest The request object to update a lead source recurring expense
     * @param updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public async updateLeadSourceRecurringExpenseUsingPATCH(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'leadSourceId' is not null or undefined
        if (leadSourceId === null || leadSourceId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "updateLeadSourceRecurringExpenseUsingPATCH", "leadSourceId");
        }


        // verify required parameter 'leadSourceRecurringExpenseId' is not null or undefined
        if (leadSourceRecurringExpenseId === null || leadSourceRecurringExpenseId === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "updateLeadSourceRecurringExpenseUsingPATCH", "leadSourceRecurringExpenseId");
        }


        // verify required parameter 'leadSourceRecurringExpenseUpdateRequest' is not null or undefined
        if (leadSourceRecurringExpenseUpdateRequest === null || leadSourceRecurringExpenseUpdateRequest === undefined) {
            throw new RequiredError("LeadSourceRecurringExpensesApi", "updateLeadSourceRecurringExpenseUsingPATCH", "leadSourceRecurringExpenseUpdateRequest");
        }



        // Path Params
        const localVarPath = '/v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}'
            .replace('{' + 'lead_source_id' + '}', encodeURIComponent(String(leadSourceId)))
            .replace('{' + 'lead_source_recurring_expense_id' + '}', encodeURIComponent(String(leadSourceRecurringExpenseId)));

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
            ObjectSerializer.serialize(leadSourceRecurringExpenseUpdateRequest, "LeadSourceRecurringExpenseUpdateRequest", ""),
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

export class LeadSourceRecurringExpensesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLeadSourceRecurringExpenseUsingPOST
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createLeadSourceRecurringExpenseUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LeadSourceRecurringExpense >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: LeadSourceRecurringExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceRecurringExpense", ""
            ) as LeadSourceRecurringExpense;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LeadSourceRecurringExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceRecurringExpense", ""
            ) as LeadSourceRecurringExpense;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLeadSourceRecurringExpenseUsingDELETE
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to getLeadSourceRecurringExpenseUsingGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLeadSourceRecurringExpenseUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LeadSourceRecurringExpense >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LeadSourceRecurringExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceRecurringExpense", ""
            ) as LeadSourceRecurringExpense;
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
            const body: LeadSourceRecurringExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceRecurringExpense", ""
            ) as LeadSourceRecurringExpense;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListLeadSourceExpensesResponse >> {
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
     * @params response Response returned by the server for a request to listLeadSourceRecurringExpensesUsingGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLeadSourceRecurringExpensesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListLeadSourceRecurringExpensesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListLeadSourceRecurringExpensesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListLeadSourceRecurringExpensesResponse", ""
            ) as ListLeadSourceRecurringExpensesResponse;
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
            const body: ListLeadSourceRecurringExpensesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListLeadSourceRecurringExpensesResponse", ""
            ) as ListLeadSourceRecurringExpensesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLeadSourceRecurringExpenseUsingPATCH
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LeadSourceRecurringExpense >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LeadSourceRecurringExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceRecurringExpense", ""
            ) as LeadSourceRecurringExpense;
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
            const body: LeadSourceRecurringExpense = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LeadSourceRecurringExpense", ""
            ) as LeadSourceRecurringExpense;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
