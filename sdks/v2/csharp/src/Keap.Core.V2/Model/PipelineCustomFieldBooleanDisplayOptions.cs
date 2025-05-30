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
    /// Class representing display options for a boolean custom field.
    /// </summary>
    [DataContract(Name = "PipelineCustomFieldBooleanDisplayOptions")]
    public partial class PipelineCustomFieldBooleanDisplayOptions : IValidatableObject
    {

        /// <summary>
        /// The display type for the boolean custom field. This field is required.
        /// </summary>
        /// <value>The display type for the boolean custom field. This field is required.</value>
        [DataMember(Name = "display_type", IsRequired = true, EmitDefaultValue = true)]
        public PipelineCustomFieldBooleanDisplayType DisplayType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PipelineCustomFieldBooleanDisplayOptions" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PipelineCustomFieldBooleanDisplayOptions() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PipelineCustomFieldBooleanDisplayOptions" /> class.
        /// </summary>
        /// <param name="displayType">The display type for the boolean custom field. This field is required. (required).</param>
        public PipelineCustomFieldBooleanDisplayOptions(PipelineCustomFieldBooleanDisplayType displayType = default)
        {
            this.DisplayType = displayType;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PipelineCustomFieldBooleanDisplayOptions {\n");
            sb.Append("  DisplayType: ").Append(DisplayType).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }    }

}
