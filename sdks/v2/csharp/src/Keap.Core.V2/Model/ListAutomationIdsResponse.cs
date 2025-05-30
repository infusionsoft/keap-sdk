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
    /// ListAutomationIdsResponse
    /// </summary>
    [DataContract(Name = "ListAutomationIdsResponse")]
    public partial class ListAutomationIdsResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListAutomationIdsResponse" /> class.
        /// </summary>
        /// <param name="automationIds">automationIds.</param>
        /// <param name="lockedAutomationIds">lockedAutomationIds.</param>
        /// <param name="nextPageToken">nextPageToken.</param>
        public ListAutomationIdsResponse(List<string> automationIds = default, List<string> lockedAutomationIds = default, string nextPageToken = default)
        {
            this.AutomationIds = automationIds;
            this.LockedAutomationIds = lockedAutomationIds;
            this.NextPageToken = nextPageToken;
        }

        /// <summary>
        /// Gets or Sets AutomationIds
        /// </summary>
        [DataMember(Name = "automation_ids", EmitDefaultValue = false)]
        public List<string> AutomationIds { get; set; }

        /// <summary>
        /// Gets or Sets LockedAutomationIds
        /// </summary>
        [DataMember(Name = "locked_automation_ids", EmitDefaultValue = false)]
        public List<string> LockedAutomationIds { get; set; }

        /// <summary>
        /// Gets or Sets NextPageToken
        /// </summary>
        [DataMember(Name = "next_page_token", EmitDefaultValue = false)]
        public string NextPageToken { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListAutomationIdsResponse {\n");
            sb.Append("  AutomationIds: ").Append(AutomationIds).Append("\n");
            sb.Append("  LockedAutomationIds: ").Append(LockedAutomationIds).Append("\n");
            sb.Append("  NextPageToken: ").Append(NextPageToken).Append("\n");
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
