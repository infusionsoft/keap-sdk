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
import Error from '../model/Error';
import ListUsersPaginatedResponse from '../model/ListUsersPaginatedResponse';

/**
* Users service.
* @module keap.core.v2/api/UsersApi
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:keap.core.v2/api/UsersApi
    * @class
    * @param {module:keap.core.v2/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:keap.core.v2/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List Users
     * Retrieves a list of users
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are: - (String) `email` - (String) `given_name` - (Boolean) `include_inactive` - (Boolean) `include_partners` - (Set[String]) `user_ids`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=given_name%3D%3DMary` - `filter=user_ids%3D%3D123%3Bgiven_name%3D%3DSmith` 
     * @param {String} [orderBy] Attribute and direction to order items. One of the following fields: - `date_created` - `email`  One of the following directions: - `asc` - `desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/ListUsersPaginatedResponse} and HTTP response
     */
    listPaginatedUsersUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListUsersPaginatedResponse;
      return this.apiClient.callApi(
        '/v2/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Users
     * Retrieves a list of users
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are: - (String) `email` - (String) `given_name` - (Boolean) `include_inactive` - (Boolean) `include_partners` - (Set[String]) `user_ids`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=given_name%3D%3DMary` - `filter=user_ids%3D%3D123%3Bgiven_name%3D%3DSmith` 
     * @param {String} opts.orderBy Attribute and direction to order items. One of the following fields: - `date_created` - `email`  One of the following directions: - `asc` - `desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/ListUsersPaginatedResponse}
     */
    listPaginatedUsersUsingGET(opts) {
      return this.listPaginatedUsersUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
