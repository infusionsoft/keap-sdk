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
import ApplyRemoveTagRequest from '../model/ApplyRemoveTagRequest';
import ApplyTagsResponse from '../model/ApplyTagsResponse';
import CreateUpdateTagCategoryRequest from '../model/CreateUpdateTagCategoryRequest';
import CreateUpdateTagRequest from '../model/CreateUpdateTagRequest';
import Error from '../model/Error';
import GetTagCategoryResponse from '../model/GetTagCategoryResponse';
import ListTagCategoriesResponse from '../model/ListTagCategoriesResponse';
import ListTaggedCompaniesResponse from '../model/ListTaggedCompaniesResponse';
import ListTaggedContactsResponse from '../model/ListTaggedContactsResponse';
import ListTagsResponse from '../model/ListTagsResponse';
import Tag from '../model/Tag';
import UpdateTagCategoryResponse from '../model/UpdateTagCategoryResponse';
import UpdateTagResponse from '../model/UpdateTagResponse';

/**
* Tags service.
* @module keap.core.v2/api/TagsApi
*/
export default class TagsApi {

    /**
    * Constructs a new TagsApi. 
    * @alias module:keap.core.v2/api/TagsApi
    * @class
    * @param {module:keap.core.v2/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:keap.core.v2/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Apply Tag
     * Applies a Tag to a list of Contacts.
     * @param {String} tagId tag_id
     * @param {module:keap.core.v2/model/ApplyRemoveTagRequest} applyRemoveTagRequest applyRemoveTagRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/ApplyTagsResponse} and HTTP response
     */
    applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest) {
      let postBody = applyRemoveTagRequest;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling applyTagsUsingPOST");
      }
      // verify the required parameter 'applyRemoveTagRequest' is set
      if (applyRemoveTagRequest === undefined || applyRemoveTagRequest === null) {
        throw new Error("Missing the required parameter 'applyRemoveTagRequest' when calling applyTagsUsingPOST");
      }

      let pathParams = {
        'tag_id': tagId
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
      let returnType = ApplyTagsResponse;
      return this.apiClient.callApi(
        '/v2/tags/{tag_id}/contacts:applyTags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Apply Tag
     * Applies a Tag to a list of Contacts.
     * @param {String} tagId tag_id
     * @param {module:keap.core.v2/model/ApplyRemoveTagRequest} applyRemoveTagRequest applyRemoveTagRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/ApplyTagsResponse}
     */
    applyTagsUsingPOST(tagId, applyRemoveTagRequest) {
      return this.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Tag Category
     * Creates a new Tag Category.
     * @param {module:keap.core.v2/model/CreateUpdateTagCategoryRequest} createUpdateTagCategoryRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Tag} and HTTP response
     */
    createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest) {
      let postBody = createUpdateTagCategoryRequest;
      // verify the required parameter 'createUpdateTagCategoryRequest' is set
      if (createUpdateTagCategoryRequest === undefined || createUpdateTagCategoryRequest === null) {
        throw new Error("Missing the required parameter 'createUpdateTagCategoryRequest' when calling createTagCategoryUsingPOST1");
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
      let returnType = Tag;
      return this.apiClient.callApi(
        '/v2/tags/categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Tag Category
     * Creates a new Tag Category.
     * @param {module:keap.core.v2/model/CreateUpdateTagCategoryRequest} createUpdateTagCategoryRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Tag}
     */
    createTagCategoryUsingPOST1(createUpdateTagCategoryRequest) {
      return this.createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Tag
     * Creates a new Tag
     * @param {module:keap.core.v2/model/CreateUpdateTagRequest} createUpdateTagRequest tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Tag} and HTTP response
     */
    createTagUsingPOST1WithHttpInfo(createUpdateTagRequest) {
      let postBody = createUpdateTagRequest;
      // verify the required parameter 'createUpdateTagRequest' is set
      if (createUpdateTagRequest === undefined || createUpdateTagRequest === null) {
        throw new Error("Missing the required parameter 'createUpdateTagRequest' when calling createTagUsingPOST1");
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
      let returnType = Tag;
      return this.apiClient.callApi(
        '/v2/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Tag
     * Creates a new Tag
     * @param {module:keap.core.v2/model/CreateUpdateTagRequest} createUpdateTagRequest tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Tag}
     */
    createTagUsingPOST1(createUpdateTagRequest) {
      return this.createTagUsingPOST1WithHttpInfo(createUpdateTagRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Tag Category
     * Deletes the specified Tag Category
     * @param {String} tagCategoryId tag_category_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId) {
      let postBody = null;
      // verify the required parameter 'tagCategoryId' is set
      if (tagCategoryId === undefined || tagCategoryId === null) {
        throw new Error("Missing the required parameter 'tagCategoryId' when calling deleteTagCategoryUsingDELETE");
      }

      let pathParams = {
        'tag_category_id': tagCategoryId
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
        '/v2/tags/categories/{tag_category_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Tag Category
     * Deletes the specified Tag Category
     * @param {String} tagCategoryId tag_category_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTagCategoryUsingDELETE(tagCategoryId) {
      return this.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Tag
     * Deletes a Tag.
     * @param {String} tagId tag_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTagUsingDELETEWithHttpInfo(tagId) {
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling deleteTagUsingDELETE");
      }

      let pathParams = {
        'tag_id': tagId
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
        '/v2/tags/{tag_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Tag
     * Deletes a Tag.
     * @param {String} tagId tag_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTagUsingDELETE(tagId) {
      return this.deleteTagUsingDELETEWithHttpInfo(tagId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Tag Category
     * Returns information about the specified Tag Category
     * @param {String} tagCategoryId tag_category_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/GetTagCategoryResponse} and HTTP response
     */
    getCategoryUsingGETWithHttpInfo(tagCategoryId) {
      let postBody = null;
      // verify the required parameter 'tagCategoryId' is set
      if (tagCategoryId === undefined || tagCategoryId === null) {
        throw new Error("Missing the required parameter 'tagCategoryId' when calling getCategoryUsingGET");
      }

      let pathParams = {
        'tag_category_id': tagCategoryId
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
      let returnType = GetTagCategoryResponse;
      return this.apiClient.callApi(
        '/v2/tags/categories/{tag_category_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Tag Category
     * Returns information about the specified Tag Category
     * @param {String} tagCategoryId tag_category_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/GetTagCategoryResponse}
     */
    getCategoryUsingGET(tagCategoryId) {
      return this.getCategoryUsingGETWithHttpInfo(tagCategoryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Tag
     * Retrieves information about the specified Tag
     * @param {String} tagId tag_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Tag} and HTTP response
     */
    getTagUsingGET1WithHttpInfo(tagId) {
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling getTagUsingGET1");
      }

      let pathParams = {
        'tag_id': tagId
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
      let returnType = Tag;
      return this.apiClient.callApi(
        '/v2/tags/{tag_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Tag
     * Retrieves information about the specified Tag
     * @param {String} tagId tag_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Tag}
     */
    getTagUsingGET1(tagId) {
      return this.getTagUsingGET1WithHttpInfo(tagId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tagged Companies
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/ListTaggedCompaniesResponse} and HTTP response
     */
    listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling listCompaniesForTagIdUsingGET1");
      }

      let pathParams = {
        'tag_id': tagId
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
      let returnType = ListTaggedCompaniesResponse;
      return this.apiClient.callApi(
        '/v2/tags/{tag_id}/companies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tagged Companies
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/ListTaggedCompaniesResponse}
     */
    listCompaniesForTagIdUsingGET1(tagId, opts) {
      return this.listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tagged Contacts
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/ListTaggedContactsResponse} and HTTP response
     */
    listContactsWithTagIdUsingGETWithHttpInfo(tagId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling listContactsWithTagIdUsingGET");
      }

      let pathParams = {
        'tag_id': tagId
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
      let returnType = ListTaggedContactsResponse;
      return this.apiClient.callApi(
        '/v2/tags/{tag_id}/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tagged Contacts
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/ListTaggedContactsResponse}
     */
    listContactsWithTagIdUsingGET(tagId, opts) {
      return this.listContactsWithTagIdUsingGETWithHttpInfo(tagId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tag Categories
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/ListTagCategoriesResponse} and HTTP response
     */
    listTagCategoriesUsingGETWithHttpInfo(opts) {
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
      let returnType = ListTagCategoriesResponse;
      return this.apiClient.callApi(
        '/v2/tags/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tag Categories
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/ListTagCategoriesResponse}
     */
    listTagCategoriesUsingGET(opts) {
      return this.listTagCategoriesUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tags
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/ListTagsResponse} and HTTP response
     */
    listTagsUsingGET1WithHttpInfo(opts) {
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
      let returnType = ListTagsResponse;
      return this.apiClient.callApi(
        '/v2/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tags
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/ListTagsResponse}
     */
    listTagsUsingGET1(opts) {
      return this.listTagsUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove Tags
     * Removes a Tag from a list of Contacts.
     * @param {String} tagId tag_id
     * @param {module:keap.core.v2/model/ApplyRemoveTagRequest} applyRemoveTagRequest applyRemoveTagRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest) {
      let postBody = applyRemoveTagRequest;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling removeTagsUsingPOST");
      }
      // verify the required parameter 'applyRemoveTagRequest' is set
      if (applyRemoveTagRequest === undefined || applyRemoveTagRequest === null) {
        throw new Error("Missing the required parameter 'applyRemoveTagRequest' when calling removeTagsUsingPOST");
      }

      let pathParams = {
        'tag_id': tagId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/tags/{tag_id}/contacts:removeTags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove Tags
     * Removes a Tag from a list of Contacts.
     * @param {String} tagId tag_id
     * @param {module:keap.core.v2/model/ApplyRemoveTagRequest} applyRemoveTagRequest applyRemoveTagRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeTagsUsingPOST(tagId, applyRemoveTagRequest) {
      return this.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Tag Category
     * Updates a Tag Category with only the values provided in the request
     * @param {String} tagCategoryId tag_category_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:keap.core.v2/model/CreateUpdateTagCategoryRequest} [createUpdateTagCategoryRequest] tagCategory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/UpdateTagCategoryResponse} and HTTP response
     */
    updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, opts) {
      opts = opts || {};
      let postBody = opts['createUpdateTagCategoryRequest'];
      // verify the required parameter 'tagCategoryId' is set
      if (tagCategoryId === undefined || tagCategoryId === null) {
        throw new Error("Missing the required parameter 'tagCategoryId' when calling updateTagCategoryUsingPATCH");
      }

      let pathParams = {
        'tag_category_id': tagCategoryId
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
      let returnType = UpdateTagCategoryResponse;
      return this.apiClient.callApi(
        '/v2/tags/categories/{tag_category_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Tag Category
     * Updates a Tag Category with only the values provided in the request
     * @param {String} tagCategoryId tag_category_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:keap.core.v2/model/CreateUpdateTagCategoryRequest} opts.createUpdateTagCategoryRequest tagCategory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/UpdateTagCategoryResponse}
     */
    updateTagCategoryUsingPATCH(tagCategoryId, opts) {
      return this.updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Tag
     * Updates a Tag with only the values provided in the request
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:keap.core.v2/model/CreateUpdateTagRequest} [createUpdateTagRequest] tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/UpdateTagResponse} and HTTP response
     */
    updateTagUsingPATCHWithHttpInfo(tagId, opts) {
      opts = opts || {};
      let postBody = opts['createUpdateTagRequest'];
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling updateTagUsingPATCH");
      }

      let pathParams = {
        'tag_id': tagId
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
      let returnType = UpdateTagResponse;
      return this.apiClient.callApi(
        '/v2/tags/{tag_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Tag
     * Updates a Tag with only the values provided in the request
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:keap.core.v2/model/CreateUpdateTagRequest} opts.createUpdateTagRequest tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/UpdateTagResponse}
     */
    updateTagUsingPATCH(tagId, opts) {
      return this.updateTagUsingPATCHWithHttpInfo(tagId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
