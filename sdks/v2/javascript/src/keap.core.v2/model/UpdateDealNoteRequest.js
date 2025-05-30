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

import ApiClient from '../ApiClient';

/**
 * The UpdateDealNoteRequest model module.
 * @module keap.core.v2/model/UpdateDealNoteRequest
 */
class UpdateDealNoteRequest {
    /**
     * Constructs a new <code>UpdateDealNoteRequest</code>.
     * Request model for updating a deal note.
     * @alias module:keap.core.v2/model/UpdateDealNoteRequest
     * @param body {String} The body of the note. Must not be blank and must be between 1 and 5000 characters.
     */
    constructor(body) { 
        
        UpdateDealNoteRequest.initialize(this, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body) { 
        obj['body'] = body;
    }

    /**
     * Constructs a <code>UpdateDealNoteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/UpdateDealNoteRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/UpdateDealNoteRequest} The populated <code>UpdateDealNoteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDealNoteRequest();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateDealNoteRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateDealNoteRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateDealNoteRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }

        return true;
    }


}

UpdateDealNoteRequest.RequiredProperties = ["body"];

/**
 * The body of the note. Must not be blank and must be between 1 and 5000 characters.
 * @member {String} body
 */
UpdateDealNoteRequest.prototype['body'] = undefined;






export default UpdateDealNoteRequest;
