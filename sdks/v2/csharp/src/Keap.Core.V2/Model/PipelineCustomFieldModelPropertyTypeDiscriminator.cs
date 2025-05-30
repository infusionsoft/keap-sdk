/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Keap.Core.V2.Client.OpenAPIDateConverter;

namespace Keap.Core.V2.Model
{
    /// <summary>
    /// Enum representing the types of model property type discriminators.
    /// </summary>
    /// <value>Enum representing the types of model property type discriminators.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum PipelineCustomFieldModelPropertyTypeDiscriminator
    {
        /// <summary>
        /// Enum SIMPLE for value: SIMPLE
        /// </summary>
        [EnumMember(Value = "SIMPLE")]
        SIMPLE = 1,

        /// <summary>
        /// Enum REF for value: REF
        /// </summary>
        [EnumMember(Value = "REF")]
        REF = 2,

        /// <summary>
        /// Enum ARRAY for value: ARRAY
        /// </summary>
        [EnumMember(Value = "ARRAY")]
        ARRAY = 3
    }

}
