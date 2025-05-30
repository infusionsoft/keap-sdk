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
    /// AddToAutomationSequenceResponse
    /// </summary>
    [DataContract(Name = "AddToAutomationSequenceResponse")]
    public partial class AddToAutomationSequenceResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AddToAutomationSequenceResponse" /> class.
        /// </summary>
        /// <param name="addToAutomationSequenceResults">addToAutomationSequenceResults.</param>
        public AddToAutomationSequenceResponse(Dictionary<string, string> addToAutomationSequenceResults = default)
        {
            this.AddToAutomationSequenceResults = addToAutomationSequenceResults;
        }

        /// <summary>
        /// Gets or Sets AddToAutomationSequenceResults
        /// </summary>
        [DataMember(Name = "add_to_automation_sequence_results", EmitDefaultValue = false)]
        public Dictionary<string, string> AddToAutomationSequenceResults { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AddToAutomationSequenceResponse {\n");
            sb.Append("  AddToAutomationSequenceResults: ").Append(AddToAutomationSequenceResults).Append("\n");
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
