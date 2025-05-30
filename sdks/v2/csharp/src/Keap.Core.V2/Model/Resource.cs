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
    /// Resource
    /// </summary>
    [DataContract(Name = "Resource")]
    public partial class Resource : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Resource" /> class.
        /// </summary>
        /// <param name="description">description.</param>
        /// <param name="file">file.</param>
        /// <param name="filename">filename.</param>
        /// <param name="inputStream">inputStream.</param>
        /// <param name="open">open.</param>
        /// <param name="readable">readable.</param>
        /// <param name="uri">uri.</param>
        /// <param name="url">url.</param>
        public Resource(string description = default, File file = default, string filename = default, Object inputStream = default, bool open = default, bool readable = default, string uri = default, URL url = default)
        {
            this.Description = description;
            this.File = file;
            this.Filename = filename;
            this.InputStream = inputStream;
            this.Open = open;
            this.Readable = readable;
            this.Uri = uri;
            this.Url = url;
        }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets File
        /// </summary>
        [DataMember(Name = "file", EmitDefaultValue = false)]
        public File File { get; set; }

        /// <summary>
        /// Gets or Sets Filename
        /// </summary>
        [DataMember(Name = "filename", EmitDefaultValue = false)]
        public string Filename { get; set; }

        /// <summary>
        /// Gets or Sets InputStream
        /// </summary>
        [DataMember(Name = "inputStream", EmitDefaultValue = false)]
        public Object InputStream { get; set; }

        /// <summary>
        /// Gets or Sets Open
        /// </summary>
        [DataMember(Name = "open", EmitDefaultValue = true)]
        public bool Open { get; set; }

        /// <summary>
        /// Gets or Sets Readable
        /// </summary>
        [DataMember(Name = "readable", EmitDefaultValue = true)]
        public bool Readable { get; set; }

        /// <summary>
        /// Gets or Sets Uri
        /// </summary>
        [DataMember(Name = "uri", EmitDefaultValue = false)]
        public string Uri { get; set; }

        /// <summary>
        /// Gets or Sets Url
        /// </summary>
        [DataMember(Name = "url", EmitDefaultValue = false)]
        public URL Url { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Resource {\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  File: ").Append(File).Append("\n");
            sb.Append("  Filename: ").Append(Filename).Append("\n");
            sb.Append("  InputStream: ").Append(InputStream).Append("\n");
            sb.Append("  Open: ").Append(Open).Append("\n");
            sb.Append("  Readable: ").Append(Readable).Append("\n");
            sb.Append("  Uri: ").Append(Uri).Append("\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
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
