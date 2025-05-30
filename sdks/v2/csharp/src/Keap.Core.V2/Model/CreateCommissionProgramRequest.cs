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
    /// CreateCommissionProgramRequest
    /// </summary>
    [DataContract(Name = "CreateCommissionProgramRequest")]
    public partial class CreateCommissionProgramRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCommissionProgramRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateCommissionProgramRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCommissionProgramRequest" /> class.
        /// </summary>
        /// <param name="name">The name of the Commission Program (required).</param>
        /// <param name="notes">The notes of the Commission Program.</param>
        /// <param name="priority">The priority of the Commission Program.</param>
        public CreateCommissionProgramRequest(string name = default, string notes = default, int priority = default)
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new ArgumentNullException("name is a required property for CreateCommissionProgramRequest and cannot be null");
            }
            this.Name = name;
            this.Notes = notes;
            this.Priority = priority;
        }

        /// <summary>
        /// The name of the Commission Program
        /// </summary>
        /// <value>The name of the Commission Program</value>
        /*
        <example>Fitness program</example>
        */
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// The notes of the Commission Program
        /// </summary>
        /// <value>The notes of the Commission Program</value>
        /*
        <example>20% default commission</example>
        */
        [DataMember(Name = "notes", EmitDefaultValue = false)]
        public string Notes { get; set; }

        /// <summary>
        /// The priority of the Commission Program
        /// </summary>
        /// <value>The priority of the Commission Program</value>
        /*
        <example>100</example>
        */
        [DataMember(Name = "priority", EmitDefaultValue = false)]
        public int Priority { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateCommissionProgramRequest {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Notes: ").Append(Notes).Append("\n");
            sb.Append("  Priority: ").Append(Priority).Append("\n");
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
