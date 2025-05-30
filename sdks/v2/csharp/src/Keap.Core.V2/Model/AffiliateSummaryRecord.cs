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
    /// AffiliateSummaryRecord
    /// </summary>
    [DataContract(Name = "AffiliateSummaryRecord")]
    public partial class AffiliateSummaryRecord : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AffiliateSummaryRecord" /> class.
        /// </summary>
        /// <param name="affiliateId">affiliateId.</param>
        /// <param name="amountEarned">amountEarned.</param>
        /// <param name="balance">balance.</param>
        /// <param name="clawbacks">clawbacks.</param>
        public AffiliateSummaryRecord(long affiliateId = default, double amountEarned = default, double balance = default, double clawbacks = default)
        {
            this.AffiliateId = affiliateId;
            this.AmountEarned = amountEarned;
            this.Balance = balance;
            this.Clawbacks = clawbacks;
        }

        /// <summary>
        /// Gets or Sets AffiliateId
        /// </summary>
        [DataMember(Name = "affiliateId", EmitDefaultValue = false)]
        public long AffiliateId { get; set; }

        /// <summary>
        /// Gets or Sets AmountEarned
        /// </summary>
        [DataMember(Name = "amountEarned", EmitDefaultValue = false)]
        public double AmountEarned { get; set; }

        /// <summary>
        /// Gets or Sets Balance
        /// </summary>
        [DataMember(Name = "balance", EmitDefaultValue = false)]
        public double Balance { get; set; }

        /// <summary>
        /// Gets or Sets Clawbacks
        /// </summary>
        [DataMember(Name = "clawbacks", EmitDefaultValue = false)]
        public double Clawbacks { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AffiliateSummaryRecord {\n");
            sb.Append("  AffiliateId: ").Append(AffiliateId).Append("\n");
            sb.Append("  AmountEarned: ").Append(AmountEarned).Append("\n");
            sb.Append("  Balance: ").Append(Balance).Append("\n");
            sb.Append("  Clawbacks: ").Append(Clawbacks).Append("\n");
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
