/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateCustomFieldRequest from '../model/CreateCustomFieldRequest';
import CreateSubscriptionV2 from '../model/CreateSubscriptionV2';
import CustomFieldMetaData from '../model/CustomFieldMetaData';
import Error from '../model/Error';
import ObjectModel from '../model/ObjectModel';
import RestSubscriptionV2 from '../model/RestSubscriptionV2';
import UpdateCustomFieldMetaDataRequest from '../model/UpdateCustomFieldMetaDataRequest';

/**
* Subscriptions service.
* @module keap.core.v2/api/SubscriptionsApi
*/
export default class SubscriptionsApi {

    /**
    * Constructs a new SubscriptionsApi. 
    * @alias module:keap.core.v2/api/SubscriptionsApi
    * @class
    * @param {module:keap.core.v2/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:keap.core.v2/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Subscription Custom Field
     * Creates a custom field of the specified type and options to the Subscription object
     * @param {module:keap.core.v2/model/CreateCustomFieldRequest} createCustomFieldRequest customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/CustomFieldMetaData} and HTTP response
     */
    createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest) {
      let postBody = createCustomFieldRequest;
      // verify the required parameter 'createCustomFieldRequest' is set
      if (createCustomFieldRequest === undefined || createCustomFieldRequest === null) {
        throw new Error("Missing the required parameter 'createCustomFieldRequest' when calling createSubscriptionCustomFieldUsingPOST");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CustomFieldMetaData;
      return this.apiClient.callApi(
        '/v2/subscriptions/model/customFields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Subscription Custom Field
     * Creates a custom field of the specified type and options to the Subscription object
     * @param {module:keap.core.v2/model/CreateCustomFieldRequest} createCustomFieldRequest customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/CustomFieldMetaData}
     */
    createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest) {
      return this.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Subscription
     * Creates a subscription with the specified product and product subscription id.
     * @param {module:keap.core.v2/model/CreateSubscriptionV2} createSubscriptionV2 createSubscriptionV2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/RestSubscriptionV2} and HTTP response
     */
    createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2) {
      let postBody = createSubscriptionV2;
      // verify the required parameter 'createSubscriptionV2' is set
      if (createSubscriptionV2 === undefined || createSubscriptionV2 === null) {
        throw new Error("Missing the required parameter 'createSubscriptionV2' when calling createSubscriptionV2UsingPOST");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestSubscriptionV2;
      return this.apiClient.callApi(
        '/v2/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Subscription
     * Creates a subscription with the specified product and product subscription id.
     * @param {module:keap.core.v2/model/CreateSubscriptionV2} createSubscriptionV2 createSubscriptionV2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/RestSubscriptionV2}
     */
    createSubscriptionV2UsingPOST(createSubscriptionV2) {
      return this.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Subscription Custom Field
     * Deletes a custom field from the Subscription object
     * @param {String} customFieldId custom_field_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(customFieldId) {
      let postBody = null;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling deleteSubscriptionCustomFieldUsingDELETE");
      }

      let pathParams = {
        'custom_field_id': customFieldId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/subscriptions/model/customFields/{custom_field_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Subscription Custom Field
     * Deletes a custom field from the Subscription object
     * @param {String} customFieldId custom_field_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSubscriptionCustomFieldUsingDELETE(customFieldId) {
      return this.deleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(customFieldId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve Subscription Custom Field Model
     * Get the custom fields for the Subscription object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/ObjectModel} and HTTP response
     */
    retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ObjectModel;
      return this.apiClient.callApi(
        '/v2/subscriptions/model', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve Subscription Custom Field Model
     * Get the custom fields for the Subscription object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/ObjectModel}
     */
    retrieveSubscriptionCustomFieldModelUsingGET() {
      return this.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Subscription Custom Field
     * Updates a custom field of the specified type and options to the Subscription object
     * @param {String} customFieldId custom_field_id
     * @param {module:keap.core.v2/model/UpdateCustomFieldMetaDataRequest} updateCustomFieldMetaDataRequest request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/CustomFieldMetaData} and HTTP response
     */
    updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, opts) {
      opts = opts || {};
      let postBody = updateCustomFieldMetaDataRequest;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling updateSubscriptionCustomFieldUsingPATCH");
      }
      // verify the required parameter 'updateCustomFieldMetaDataRequest' is set
      if (updateCustomFieldMetaDataRequest === undefined || updateCustomFieldMetaDataRequest === null) {
        throw new Error("Missing the required parameter 'updateCustomFieldMetaDataRequest' when calling updateSubscriptionCustomFieldUsingPATCH");
      }

      let pathParams = {
        'custom_field_id': customFieldId
      };
      let queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CustomFieldMetaData;
      return this.apiClient.callApi(
        '/v2/subscriptions/model/customFields/{custom_field_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Subscription Custom Field
     * Updates a custom field of the specified type and options to the Subscription object
     * @param {String} customFieldId custom_field_id
     * @param {module:keap.core.v2/model/UpdateCustomFieldMetaDataRequest} updateCustomFieldMetaDataRequest request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/CustomFieldMetaData}
     */
    updateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts) {
      return this.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
