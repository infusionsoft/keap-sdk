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
import CreateCustomFieldResponse from '../model/CreateCustomFieldResponse';
import CreateTaskRequest from '../model/CreateTaskRequest';
import CreateUpdateTaskRequest from '../model/CreateUpdateTaskRequest';
import CustomFieldMetaData from '../model/CustomFieldMetaData';
import Error from '../model/Error';
import ListTasksResponse from '../model/ListTasksResponse';
import ObjectModel from '../model/ObjectModel';
import Task from '../model/Task';
import UpdateCustomFieldMetaDataRequest from '../model/UpdateCustomFieldMetaDataRequest';
import UpdateTaskResponse from '../model/UpdateTaskResponse';

/**
* Task service.
* @module keap.core.v2/api/TaskApi
*/
export default class TaskApi {

    /**
    * Constructs a new TaskApi. 
    * @alias module:keap.core.v2/api/TaskApi
    * @class
    * @param {module:keap.core.v2/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:keap.core.v2/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Custom Field
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * @param {module:keap.core.v2/model/CreateCustomFieldRequest} createCustomFieldRequest customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/CreateCustomFieldResponse} and HTTP response
     */
    createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest) {
      let postBody = createCustomFieldRequest;
      // verify the required parameter 'createCustomFieldRequest' is set
      if (createCustomFieldRequest === undefined || createCustomFieldRequest === null) {
        throw new Error("Missing the required parameter 'createCustomFieldRequest' when calling createTaskCustomFieldUsingPOST1");
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
      let returnType = CreateCustomFieldResponse;
      return this.apiClient.callApi(
        '/v2/tasks/model/customFields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Custom Field
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * @param {module:keap.core.v2/model/CreateCustomFieldRequest} createCustomFieldRequest customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/CreateCustomFieldResponse}
     */
    createTaskCustomFieldUsingPOST1(createCustomFieldRequest) {
      return this.createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Task
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * @param {Object} opts Optional parameters
     * @param {module:keap.core.v2/model/CreateTaskRequest} [createTaskRequest] task
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Task} and HTTP response
     */
    createTaskUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createTaskRequest'];

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
      let returnType = Task;
      return this.apiClient.callApi(
        '/v2/tasks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Task
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * @param {Object} opts Optional parameters
     * @param {module:keap.core.v2/model/CreateTaskRequest} opts.createTaskRequest task
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Task}
     */
    createTaskUsingPOST1(opts) {
      return this.createTaskUsingPOST1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Custom Field
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * @param {String} customFieldId custom_field_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId) {
      let postBody = null;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling deleteTaskCustomFieldUsingDELETE");
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
        '/v2/tasks/model/customFields/{custom_field_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Custom Field
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * @param {String} customFieldId custom_field_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTaskCustomFieldUsingDELETE(customFieldId) {
      return this.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Task
     * Deletes a single task
     * @param {String} taskId task_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTaskUsingDELETE1WithHttpInfo(taskId) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling deleteTaskUsingDELETE1");
      }

      let pathParams = {
        'task_id': taskId
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
        '/v2/tasks/{task_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Task
     * Deletes a single task
     * @param {String} taskId task_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTaskUsingDELETE1(taskId) {
      return this.deleteTaskUsingDELETE1WithHttpInfo(taskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Task
     * Retrieves a single task
     * @param {String} taskId task_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Task} and HTTP response
     */
    getTaskUsingGET1WithHttpInfo(taskId) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling getTaskUsingGET1");
      }

      let pathParams = {
        'task_id': taskId
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
      let returnType = Task;
      return this.apiClient.callApi(
        '/v2/tasks/{task_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Task
     * Retrieves a single task
     * @param {String} taskId task_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Task}
     */
    getTaskUsingGET1(taskId) {
      return this.getTaskUsingGET1WithHttpInfo(taskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tasks
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * @param {Object} opts Optional parameters
     * @param {String} [endDueTime] 
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @param {String} [startDueTime] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/ListTasksResponse} and HTTP response
     */
    listTasksUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'end_due_time': opts['endDueTime'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken'],
        'start_due_time': opts['startDueTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListTasksResponse;
      return this.apiClient.callApi(
        '/v2/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tasks
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * @param {Object} opts Optional parameters
     * @param {String} opts.endDueTime 
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @param {String} opts.startDueTime 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/ListTasksResponse}
     */
    listTasksUsingGET1(opts) {
      return this.listTasksUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve Task Model
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/ObjectModel} and HTTP response
     */
    retrieveTaskModelUsingGET1WithHttpInfo() {
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
        '/v2/tasks/model', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve Task Model
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/ObjectModel}
     */
    retrieveTaskModelUsingGET1() {
      return this.retrieveTaskModelUsingGET1WithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Task's Custom Field
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * @param {String} customFieldId custom_field_id
     * @param {module:keap.core.v2/model/UpdateCustomFieldMetaDataRequest} updateCustomFieldMetaDataRequest request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/CustomFieldMetaData} and HTTP response
     */
    updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, opts) {
      opts = opts || {};
      let postBody = updateCustomFieldMetaDataRequest;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling updateTaskCustomFieldUsingPATCH");
      }
      // verify the required parameter 'updateCustomFieldMetaDataRequest' is set
      if (updateCustomFieldMetaDataRequest === undefined || updateCustomFieldMetaDataRequest === null) {
        throw new Error("Missing the required parameter 'updateCustomFieldMetaDataRequest' when calling updateTaskCustomFieldUsingPATCH");
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
        '/v2/tasks/model/customFields/{custom_field_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Task's Custom Field
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * @param {String} customFieldId custom_field_id
     * @param {module:keap.core.v2/model/UpdateCustomFieldMetaDataRequest} updateCustomFieldMetaDataRequest request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/CustomFieldMetaData}
     */
    updateTaskCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts) {
      return this.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Task
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * @param {String} taskId task_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:keap.core.v2/model/CreateUpdateTaskRequest} [createUpdateTaskRequest] task
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/UpdateTaskResponse} and HTTP response
     */
    updateTaskUsingPATCHWithHttpInfo(taskId, opts) {
      opts = opts || {};
      let postBody = opts['createUpdateTaskRequest'];
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling updateTaskUsingPATCH");
      }

      let pathParams = {
        'task_id': taskId
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
      let returnType = UpdateTaskResponse;
      return this.apiClient.callApi(
        '/v2/tasks/{task_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Task
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * @param {String} taskId task_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:keap.core.v2/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:keap.core.v2/model/CreateUpdateTaskRequest} opts.createUpdateTaskRequest task
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/UpdateTaskResponse}
     */
    updateTaskUsingPATCH(taskId, opts) {
      return this.updateTaskUsingPATCHWithHttpInfo(taskId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
