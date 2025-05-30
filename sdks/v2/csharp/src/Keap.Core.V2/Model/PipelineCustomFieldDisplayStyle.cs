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
    /// Enum representing the display styles for custom fields.
    /// </summary>
    /// <value>Enum representing the display styles for custom fields.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum PipelineCustomFieldDisplayStyle
    {
        /// <summary>
        /// Enum QUOTE for value: QUOTE
        /// </summary>
        [EnumMember(Value = "QUOTE")]
        QUOTE = 1,

        /// <summary>
        /// Enum BOLD for value: BOLD
        /// </summary>
        [EnumMember(Value = "BOLD")]
        BOLD = 2,

        /// <summary>
        /// Enum ALIGNEND for value: ALIGN_END
        /// </summary>
        [EnumMember(Value = "ALIGN_END")]
        ALIGNEND = 3,

        /// <summary>
        /// Enum ITALIC for value: ITALIC
        /// </summary>
        [EnumMember(Value = "ITALIC")]
        ITALIC = 4,

        /// <summary>
        /// Enum LARGE for value: LARGE
        /// </summary>
        [EnumMember(Value = "LARGE")]
        LARGE = 5,

        /// <summary>
        /// Enum MEDIUM for value: MEDIUM
        /// </summary>
        [EnumMember(Value = "MEDIUM")]
        MEDIUM = 6,

        /// <summary>
        /// Enum SMALL for value: SMALL
        /// </summary>
        [EnumMember(Value = "SMALL")]
        SMALL = 7,

        /// <summary>
        /// Enum XS for value: XS
        /// </summary>
        [EnumMember(Value = "XS")]
        XS = 8,

        /// <summary>
        /// Enum CENTER for value: CENTER
        /// </summary>
        [EnumMember(Value = "CENTER")]
        CENTER = 9,

        /// <summary>
        /// Enum HYPHENATED for value: HYPHENATED
        /// </summary>
        [EnumMember(Value = "HYPHENATED")]
        HYPHENATED = 10,

        /// <summary>
        /// Enum LABELED for value: LABELED
        /// </summary>
        [EnumMember(Value = "LABELED")]
        LABELED = 11
    }

}
