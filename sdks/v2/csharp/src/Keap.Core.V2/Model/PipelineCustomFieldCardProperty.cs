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
    /// Class representing a property of a card custom field.
    /// </summary>
    [DataContract(Name = "PipelineCustomFieldCardProperty")]
    public partial class PipelineCustomFieldCardProperty : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PipelineCustomFieldCardProperty" /> class.
        /// </summary>
        /// <param name="propertyName">The name of the property..</param>
        /// <param name="styles">The display styles associated with the property..</param>
        public PipelineCustomFieldCardProperty(string propertyName = default, List<PipelineCustomFieldDisplayStyle> styles = default)
        {
            this.PropertyName = propertyName;
            this.Styles = styles;
        }

        /// <summary>
        /// The name of the property.
        /// </summary>
        /// <value>The name of the property.</value>
        [DataMember(Name = "property_name", EmitDefaultValue = true)]
        public string PropertyName { get; set; }

        /// <summary>
        /// The display styles associated with the property.
        /// </summary>
        /// <value>The display styles associated with the property.</value>
        [DataMember(Name = "styles", EmitDefaultValue = true)]
        public List<PipelineCustomFieldDisplayStyle> Styles { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PipelineCustomFieldCardProperty {\n");
            sb.Append("  PropertyName: ").Append(PropertyName).Append("\n");
            sb.Append("  Styles: ").Append(Styles).Append("\n");
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
