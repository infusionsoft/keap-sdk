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
    /// UpdateOpportunityRequestV2
    /// </summary>
    [DataContract(Name = "UpdateOpportunityRequestV2")]
    public partial class UpdateOpportunityRequestV2 : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateOpportunityRequestV2" /> class.
        /// </summary>
        /// <param name="affiliateId">affiliateId.</param>
        /// <param name="contactId">contactId.</param>
        /// <param name="customFields">customFields.</param>
        /// <param name="estimatedCloseTime">estimatedCloseTime.</param>
        /// <param name="includeInForecast">includeInForecast.</param>
        /// <param name="nextActionNotes">nextActionNotes.</param>
        /// <param name="nextActionTime">nextActionTime.</param>
        /// <param name="opportunityNotes">opportunityNotes.</param>
        /// <param name="opportunityTitle">opportunityTitle.</param>
        /// <param name="projectedRevenueHigh">projectedRevenueHigh.</param>
        /// <param name="projectedRevenueLow">projectedRevenueLow.</param>
        /// <param name="stageId">stageId.</param>
        /// <param name="userId">userId.</param>
        public UpdateOpportunityRequestV2(string affiliateId = default, string contactId = default, List<CustomField> customFields = default, string estimatedCloseTime = default, bool includeInForecast = default, string nextActionNotes = default, string nextActionTime = default, string opportunityNotes = default, string opportunityTitle = default, double projectedRevenueHigh = default, double projectedRevenueLow = default, string stageId = default, string userId = default)
        {
            this.AffiliateId = affiliateId;
            this.ContactId = contactId;
            this.CustomFields = customFields;
            this.EstimatedCloseTime = estimatedCloseTime;
            this.IncludeInForecast = includeInForecast;
            this.NextActionNotes = nextActionNotes;
            this.NextActionTime = nextActionTime;
            this.OpportunityNotes = opportunityNotes;
            this.OpportunityTitle = opportunityTitle;
            this.ProjectedRevenueHigh = projectedRevenueHigh;
            this.ProjectedRevenueLow = projectedRevenueLow;
            this.StageId = stageId;
            this.UserId = userId;
        }

        /// <summary>
        /// Gets or Sets AffiliateId
        /// </summary>
        [DataMember(Name = "affiliate_id", EmitDefaultValue = false)]
        public string AffiliateId { get; set; }

        /// <summary>
        /// Gets or Sets ContactId
        /// </summary>
        [DataMember(Name = "contact_id", EmitDefaultValue = false)]
        public string ContactId { get; set; }

        /// <summary>
        /// Gets or Sets CustomFields
        /// </summary>
        [DataMember(Name = "custom_fields", EmitDefaultValue = false)]
        public List<CustomField> CustomFields { get; set; }

        /// <summary>
        /// Gets or Sets EstimatedCloseTime
        /// </summary>
        [DataMember(Name = "estimated_close_time", EmitDefaultValue = false)]
        public string EstimatedCloseTime { get; set; }

        /// <summary>
        /// Gets or Sets IncludeInForecast
        /// </summary>
        [DataMember(Name = "include_in_forecast", EmitDefaultValue = true)]
        public bool IncludeInForecast { get; set; }

        /// <summary>
        /// Gets or Sets NextActionNotes
        /// </summary>
        [DataMember(Name = "next_action_notes", EmitDefaultValue = false)]
        public string NextActionNotes { get; set; }

        /// <summary>
        /// Gets or Sets NextActionTime
        /// </summary>
        [DataMember(Name = "next_action_time", EmitDefaultValue = false)]
        public string NextActionTime { get; set; }

        /// <summary>
        /// Gets or Sets OpportunityNotes
        /// </summary>
        [DataMember(Name = "opportunity_notes", EmitDefaultValue = false)]
        public string OpportunityNotes { get; set; }

        /// <summary>
        /// Gets or Sets OpportunityTitle
        /// </summary>
        [DataMember(Name = "opportunity_title", EmitDefaultValue = false)]
        public string OpportunityTitle { get; set; }

        /// <summary>
        /// Gets or Sets ProjectedRevenueHigh
        /// </summary>
        [DataMember(Name = "projected_revenue_high", EmitDefaultValue = false)]
        public double ProjectedRevenueHigh { get; set; }

        /// <summary>
        /// Gets or Sets ProjectedRevenueLow
        /// </summary>
        [DataMember(Name = "projected_revenue_low", EmitDefaultValue = false)]
        public double ProjectedRevenueLow { get; set; }

        /// <summary>
        /// Gets or Sets StageId
        /// </summary>
        [DataMember(Name = "stage_id", EmitDefaultValue = false)]
        public string StageId { get; set; }

        /// <summary>
        /// Gets or Sets UserId
        /// </summary>
        [DataMember(Name = "user_id", EmitDefaultValue = false)]
        public string UserId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateOpportunityRequestV2 {\n");
            sb.Append("  AffiliateId: ").Append(AffiliateId).Append("\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  EstimatedCloseTime: ").Append(EstimatedCloseTime).Append("\n");
            sb.Append("  IncludeInForecast: ").Append(IncludeInForecast).Append("\n");
            sb.Append("  NextActionNotes: ").Append(NextActionNotes).Append("\n");
            sb.Append("  NextActionTime: ").Append(NextActionTime).Append("\n");
            sb.Append("  OpportunityNotes: ").Append(OpportunityNotes).Append("\n");
            sb.Append("  OpportunityTitle: ").Append(OpportunityTitle).Append("\n");
            sb.Append("  ProjectedRevenueHigh: ").Append(ProjectedRevenueHigh).Append("\n");
            sb.Append("  ProjectedRevenueLow: ").Append(ProjectedRevenueLow).Append("\n");
            sb.Append("  StageId: ").Append(StageId).Append("\n");
            sb.Append("  UserId: ").Append(UserId).Append("\n");
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
