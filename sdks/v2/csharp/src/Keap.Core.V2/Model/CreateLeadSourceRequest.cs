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
    /// CreateLeadSourceRequest
    /// </summary>
    [DataContract(Name = "CreateLeadSourceRequest")]
    public partial class CreateLeadSourceRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateLeadSourceRequest" /> class.
        /// </summary>
        /// <param name="description">A description of the lead source.</param>
        /// <param name="endTime">When the lead source ends.</param>
        /// <param name="leadSourceCategoryId">The lead source category that the lead source belongs to.</param>
        /// <param name="medium">The medium of the lead source.</param>
        /// <param name="message">A message on the lead source.</param>
        /// <param name="name">The name of the lead source.</param>
        /// <param name="startTime">When the lead source starts.</param>
        /// <param name="status">The status of the lead source.</param>
        /// <param name="vendor">The vendor of the lead source.</param>
        public CreateLeadSourceRequest(string description = default, string endTime = default, string leadSourceCategoryId = default, string medium = default, string message = default, string name = default, string startTime = default, string status = default, string vendor = default)
        {
            this.Description = description;
            this.EndTime = endTime;
            this.LeadSourceCategoryId = leadSourceCategoryId;
            this.Medium = medium;
            this.Message = message;
            this.Name = name;
            this.StartTime = startTime;
            this.Status = status;
            this.Vendor = vendor;
        }

        /// <summary>
        /// A description of the lead source
        /// </summary>
        /// <value>A description of the lead source</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// When the lead source ends
        /// </summary>
        /// <value>When the lead source ends</value>
        [DataMember(Name = "end_time", EmitDefaultValue = false)]
        public string EndTime { get; set; }

        /// <summary>
        /// The lead source category that the lead source belongs to
        /// </summary>
        /// <value>The lead source category that the lead source belongs to</value>
        [DataMember(Name = "lead_source_category_id", EmitDefaultValue = false)]
        public string LeadSourceCategoryId { get; set; }

        /// <summary>
        /// The medium of the lead source
        /// </summary>
        /// <value>The medium of the lead source</value>
        [DataMember(Name = "medium", EmitDefaultValue = false)]
        public string Medium { get; set; }

        /// <summary>
        /// A message on the lead source
        /// </summary>
        /// <value>A message on the lead source</value>
        [DataMember(Name = "message", EmitDefaultValue = false)]
        public string Message { get; set; }

        /// <summary>
        /// The name of the lead source
        /// </summary>
        /// <value>The name of the lead source</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// When the lead source starts
        /// </summary>
        /// <value>When the lead source starts</value>
        [DataMember(Name = "start_time", EmitDefaultValue = false)]
        public string StartTime { get; set; }

        /// <summary>
        /// The status of the lead source
        /// </summary>
        /// <value>The status of the lead source</value>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public string Status { get; set; }

        /// <summary>
        /// The vendor of the lead source
        /// </summary>
        /// <value>The vendor of the lead source</value>
        [DataMember(Name = "vendor", EmitDefaultValue = false)]
        public string Vendor { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateLeadSourceRequest {\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  EndTime: ").Append(EndTime).Append("\n");
            sb.Append("  LeadSourceCategoryId: ").Append(LeadSourceCategoryId).Append("\n");
            sb.Append("  Medium: ").Append(Medium).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  StartTime: ").Append(StartTime).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  Vendor: ").Append(Vendor).Append("\n");
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
