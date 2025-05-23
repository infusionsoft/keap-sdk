// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { PipelineCustomField } from '../models/PipelineCustomField';
import { PipelineCustomFields } from '../models/PipelineCustomFields';
import { UpdateCustomFieldRequest } from '../models/UpdateCustomFieldRequest';

/**
 * no description
 */
export class CustomFieldsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves a list of custom fields in a tenant.
     * Retrieves a list of custom fields in a tenant.
     */
    public async getCustomFields(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v2/customFields';

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
     * Updates a custom field
     * Updates a custom field
     * @param customFieldId the identifier of the custom field to update
     * @param updateCustomFieldRequest the request body containing updated custom field details
     */
    public async updateCustomField(customFieldId: string, updateCustomFieldRequest: UpdateCustomFieldRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'customFieldId' is not null or undefined
        if (customFieldId === null || customFieldId === undefined) {
            throw new RequiredError("CustomFieldsApi", "updateCustomField", "customFieldId");
        }


        // verify required parameter 'updateCustomFieldRequest' is not null or undefined
        if (updateCustomFieldRequest === null || updateCustomFieldRequest === undefined) {
            throw new RequiredError("CustomFieldsApi", "updateCustomField", "updateCustomFieldRequest");
        }


        // Path Params
        const localVarPath = '/v2/customFields/{custom_field_id}'
            .replace('{' + 'custom_field_id' + '}', encodeURIComponent(String(customFieldId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateCustomFieldRequest, "UpdateCustomFieldRequest", ""),
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

export class CustomFieldsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomFields
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCustomFieldsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PipelineCustomFields >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PipelineCustomFields = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PipelineCustomFields", ""
            ) as PipelineCustomFields;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PipelineCustomFields = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PipelineCustomFields", ""
            ) as PipelineCustomFields;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCustomField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCustomFieldWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PipelineCustomField >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PipelineCustomField = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PipelineCustomField", ""
            ) as PipelineCustomField;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PipelineCustomField = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PipelineCustomField", ""
            ) as PipelineCustomField;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
