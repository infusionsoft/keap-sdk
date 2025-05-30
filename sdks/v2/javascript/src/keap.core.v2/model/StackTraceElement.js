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
 * The StackTraceElement model module.
 * @module keap.core.v2/model/StackTraceElement
 */
class StackTraceElement {
    /**
     * Constructs a new <code>StackTraceElement</code>.
     * @alias module:keap.core.v2/model/StackTraceElement
     */
    constructor() { 
        
        StackTraceElement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StackTraceElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/StackTraceElement} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/StackTraceElement} The populated <code>StackTraceElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StackTraceElement();

            if (data.hasOwnProperty('classLoaderName')) {
                obj['classLoaderName'] = ApiClient.convertToType(data['classLoaderName'], 'String');
            }
            if (data.hasOwnProperty('className')) {
                obj['className'] = ApiClient.convertToType(data['className'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('lineNumber')) {
                obj['lineNumber'] = ApiClient.convertToType(data['lineNumber'], 'Number');
            }
            if (data.hasOwnProperty('methodName')) {
                obj['methodName'] = ApiClient.convertToType(data['methodName'], 'String');
            }
            if (data.hasOwnProperty('moduleName')) {
                obj['moduleName'] = ApiClient.convertToType(data['moduleName'], 'String');
            }
            if (data.hasOwnProperty('moduleVersion')) {
                obj['moduleVersion'] = ApiClient.convertToType(data['moduleVersion'], 'String');
            }
            if (data.hasOwnProperty('nativeMethod')) {
                obj['nativeMethod'] = ApiClient.convertToType(data['nativeMethod'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StackTraceElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StackTraceElement</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['classLoaderName'] && !(typeof data['classLoaderName'] === 'string' || data['classLoaderName'] instanceof String)) {
            throw new Error("Expected the field `classLoaderName` to be a primitive type in the JSON string but got " + data['classLoaderName']);
        }
        // ensure the json data is a string
        if (data['className'] && !(typeof data['className'] === 'string' || data['className'] instanceof String)) {
            throw new Error("Expected the field `className` to be a primitive type in the JSON string but got " + data['className']);
        }
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }
        // ensure the json data is a string
        if (data['methodName'] && !(typeof data['methodName'] === 'string' || data['methodName'] instanceof String)) {
            throw new Error("Expected the field `methodName` to be a primitive type in the JSON string but got " + data['methodName']);
        }
        // ensure the json data is a string
        if (data['moduleName'] && !(typeof data['moduleName'] === 'string' || data['moduleName'] instanceof String)) {
            throw new Error("Expected the field `moduleName` to be a primitive type in the JSON string but got " + data['moduleName']);
        }
        // ensure the json data is a string
        if (data['moduleVersion'] && !(typeof data['moduleVersion'] === 'string' || data['moduleVersion'] instanceof String)) {
            throw new Error("Expected the field `moduleVersion` to be a primitive type in the JSON string but got " + data['moduleVersion']);
        }

        return true;
    }


}



/**
 * @member {String} classLoaderName
 */
StackTraceElement.prototype['classLoaderName'] = undefined;

/**
 * @member {String} className
 */
StackTraceElement.prototype['className'] = undefined;

/**
 * @member {String} fileName
 */
StackTraceElement.prototype['fileName'] = undefined;

/**
 * @member {Number} lineNumber
 */
StackTraceElement.prototype['lineNumber'] = undefined;

/**
 * @member {String} methodName
 */
StackTraceElement.prototype['methodName'] = undefined;

/**
 * @member {String} moduleName
 */
StackTraceElement.prototype['moduleName'] = undefined;

/**
 * @member {String} moduleVersion
 */
StackTraceElement.prototype['moduleVersion'] = undefined;

/**
 * @member {Boolean} nativeMethod
 */
StackTraceElement.prototype['nativeMethod'] = undefined;






export default StackTraceElement;
