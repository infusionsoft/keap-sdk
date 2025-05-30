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
import BulkCreateDealNotesRequest from '../model/BulkCreateDealNotesRequest';
import BulkCreateDealNotesResponse from '../model/BulkCreateDealNotesResponse';
import CreateDealNoteRequest from '../model/CreateDealNoteRequest';
import CreateDealRequest from '../model/CreateDealRequest';
import Deal from '../model/Deal';
import DealListResponse from '../model/DealListResponse';
import DealNote from '../model/DealNote';
import DealNoteListResponse from '../model/DealNoteListResponse';
import MoveDealsForContactsRequest from '../model/MoveDealsForContactsRequest';
import MoveDealsForContactsResponse from '../model/MoveDealsForContactsResponse';
import UpdateDealNoteRequest from '../model/UpdateDealNoteRequest';

/**
* Deals service.
* @module keap.core.v2/api/DealsApi
*/
export default class DealsApi {

    /**
    * Constructs a new DealsApi. 
    * @alias module:keap.core.v2/api/DealsApi
    * @class
    * @param {module:keap.core.v2/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:keap.core.v2/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a new deal.
     * Creates a new deal.
     * @param {module:keap.core.v2/model/CreateDealRequest} createDealRequest the request body containing deal details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Deal} and HTTP response
     */
    createDealWithHttpInfo(createDealRequest) {
      let postBody = createDealRequest;
      // verify the required parameter 'createDealRequest' is set
      if (createDealRequest === undefined || createDealRequest === null) {
        throw new Error("Missing the required parameter 'createDealRequest' when calling createDeal");
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
      let returnType = Deal;
      return this.apiClient.callApi(
        '/v2/deals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new deal.
     * Creates a new deal.
     * @param {module:keap.core.v2/model/CreateDealRequest} createDealRequest the request body containing deal details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Deal}
     */
    createDeal(createDealRequest) {
      return this.createDealWithHttpInfo(createDealRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param {String} id the deal ID to associate the new note with
     * @param {module:keap.core.v2/model/CreateDealNoteRequest} createDealNoteRequest the request body containing note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/DealNote} and HTTP response
     */
    createNoteWithHttpInfo(id, createDealNoteRequest) {
      let postBody = createDealNoteRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createNote");
      }
      // verify the required parameter 'createDealNoteRequest' is set
      if (createDealNoteRequest === undefined || createDealNoteRequest === null) {
        throw new Error("Missing the required parameter 'createDealNoteRequest' when calling createNote");
      }

      let pathParams = {
        'id': id
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
      let returnType = DealNote;
      return this.apiClient.callApi(
        '/v2/deals/{id}/notes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param {String} id the deal ID to associate the new note with
     * @param {module:keap.core.v2/model/CreateDealNoteRequest} createDealNoteRequest the request body containing note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/DealNote}
     */
    createNote(id, createDealNoteRequest) {
      return this.createNoteWithHttpInfo(id, createDealNoteRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates new notes in bulk.
     * Creates new notes in bulk.
     * @param {module:keap.core.v2/model/BulkCreateDealNotesRequest} bulkCreateDealNotesRequest the request body containing note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/BulkCreateDealNotesResponse} and HTTP response
     */
    createNotesBulkWithHttpInfo(bulkCreateDealNotesRequest) {
      let postBody = bulkCreateDealNotesRequest;
      // verify the required parameter 'bulkCreateDealNotesRequest' is set
      if (bulkCreateDealNotesRequest === undefined || bulkCreateDealNotesRequest === null) {
        throw new Error("Missing the required parameter 'bulkCreateDealNotesRequest' when calling createNotesBulk");
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
      let returnType = BulkCreateDealNotesResponse;
      return this.apiClient.callApi(
        '/v2/deals/-/notes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates new notes in bulk.
     * Creates new notes in bulk.
     * @param {module:keap.core.v2/model/BulkCreateDealNotesRequest} bulkCreateDealNotesRequest the request body containing note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/BulkCreateDealNotesResponse}
     */
    createNotesBulk(bulkCreateDealNotesRequest) {
      return this.createNotesBulkWithHttpInfo(bulkCreateDealNotesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a specific deal by its ID.
     * Deletes a specific deal by its ID.
     * @param {String} id the ID of the deal to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDealWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDeal");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/deals/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a specific deal by its ID.
     * Deletes a specific deal by its ID.
     * @param {String} id the ID of the deal to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDeal(id) {
      return this.deleteDealWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param {String} noteId the ID of the note to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteNoteWithHttpInfo(noteId) {
      let postBody = null;
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling deleteNote");
      }

      let pathParams = {
        'note_id': noteId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/deals/-/notes/{note_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param {String} noteId the ID of the note to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteNote(noteId) {
      return this.deleteNoteWithHttpInfo(noteId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a specific deal by its ID.
     * Retrieves a specific deal by its ID.
     * @param {String} id the ID of the deal to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Deal} and HTTP response
     */
    getDealWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDeal");
      }

      let pathParams = {
        'id': id
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
      let returnType = Deal;
      return this.apiClient.callApi(
        '/v2/deals/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a specific deal by its ID.
     * Retrieves a specific deal by its ID.
     * @param {String} id the ID of the deal to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Deal}
     */
    getDeal(id) {
      return this.getDealWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param {String} noteId the ID of the note to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/DealNote} and HTTP response
     */
    getNoteWithHttpInfo(noteId) {
      let postBody = null;
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling getNote");
      }

      let pathParams = {
        'note_id': noteId
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
      let returnType = DealNote;
      return this.apiClient.callApi(
        '/v2/deals/-/notes/{note_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param {String} noteId the ID of the note to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/DealNote}
     */
    getNote(noteId) {
      return this.getNoteWithHttpInfo(noteId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists all deals associated with a specific contact.
     * Lists all deals associated with a specific contact.
     * @param {String} contactId the contact ID to list deals for
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @param {String} [pageToken] 
     * @param {String} [orderBy] 
     * @param {Number} [pageSize = 1000)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/DealListResponse} and HTTP response
     */
    listDealsWithHttpInfo(contactId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling listDeals");
      }

      let pathParams = {
        'contact_id': contactId
      };
      let queryParams = {
        'filter': opts['filter'],
        'page_token': opts['pageToken'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DealListResponse;
      return this.apiClient.callApi(
        '/v2/deals/-/contacts/{contact_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Lists all deals associated with a specific contact.
     * Lists all deals associated with a specific contact.
     * @param {String} contactId the contact ID to list deals for
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @param {String} opts.pageToken 
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize  (default to 1000)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/DealListResponse}
     */
    listDeals(contactId, opts) {
      return this.listDealsWithHttpInfo(contactId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists all notes associated with a specific deal.
     * Lists all notes associated with a specific deal.
     * @param {String} id the deal ID to list notes for
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @param {String} [pageToken] 
     * @param {String} [orderBy] 
     * @param {Number} [pageSize = 1000)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/DealNoteListResponse} and HTTP response
     */
    listNotesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling listNotes");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'filter': opts['filter'],
        'page_token': opts['pageToken'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DealNoteListResponse;
      return this.apiClient.callApi(
        '/v2/deals/{id}/notes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Lists all notes associated with a specific deal.
     * Lists all notes associated with a specific deal.
     * @param {String} id the deal ID to list notes for
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @param {String} opts.pageToken 
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize  (default to 1000)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/DealNoteListResponse}
     */
    listNotes(id, opts) {
      return this.listNotesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Moves the active deals of specified contacts from one stage to another, in bulk.
     * Moves the active deals of specified contacts from one stage to another, in bulk.
     * @param {module:keap.core.v2/model/MoveDealsForContactsRequest} moveDealsForContactsRequest the request body containing move details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/MoveDealsForContactsResponse} and HTTP response
     */
    moveDealsForContactsWithHttpInfo(moveDealsForContactsRequest) {
      let postBody = moveDealsForContactsRequest;
      // verify the required parameter 'moveDealsForContactsRequest' is set
      if (moveDealsForContactsRequest === undefined || moveDealsForContactsRequest === null) {
        throw new Error("Missing the required parameter 'moveDealsForContactsRequest' when calling moveDealsForContacts");
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
      let returnType = MoveDealsForContactsResponse;
      return this.apiClient.callApi(
        '/v2/deals/moveByContactIds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Moves the active deals of specified contacts from one stage to another, in bulk.
     * Moves the active deals of specified contacts from one stage to another, in bulk.
     * @param {module:keap.core.v2/model/MoveDealsForContactsRequest} moveDealsForContactsRequest the request body containing move details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/MoveDealsForContactsResponse}
     */
    moveDealsForContacts(moveDealsForContactsRequest) {
      return this.moveDealsForContactsWithHttpInfo(moveDealsForContactsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param {String} noteId the ID of the note to update
     * @param {module:keap.core.v2/model/UpdateDealNoteRequest} updateDealNoteRequest the request body containing updated note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/DealNote} and HTTP response
     */
    updateNoteWithHttpInfo(noteId, updateDealNoteRequest) {
      let postBody = updateDealNoteRequest;
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling updateNote");
      }
      // verify the required parameter 'updateDealNoteRequest' is set
      if (updateDealNoteRequest === undefined || updateDealNoteRequest === null) {
        throw new Error("Missing the required parameter 'updateDealNoteRequest' when calling updateNote");
      }

      let pathParams = {
        'note_id': noteId
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
      let returnType = DealNote;
      return this.apiClient.callApi(
        '/v2/deals/-/notes/{note_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param {String} noteId the ID of the note to update
     * @param {module:keap.core.v2/model/UpdateDealNoteRequest} updateDealNoteRequest the request body containing updated note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/DealNote}
     */
    updateNote(noteId, updateDealNoteRequest) {
      return this.updateNoteWithHttpInfo(noteId, updateDealNoteRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
