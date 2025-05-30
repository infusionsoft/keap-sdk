/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.core.sdk.model;

import java.util.Objects;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import com.keap.core.sdk.model.BulkCreateDealNoteRequest;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Request model for creating multiple deal notes in bulk.
 */
@Schema(description = "Request model for creating multiple deal notes in bulk.")
@JsonPropertyOrder({
  BulkCreateDealNotesRequest.JSON_PROPERTY_CREATE_NOTE_REQUESTS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class BulkCreateDealNotesRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CREATE_NOTE_REQUESTS = "create_note_requests";
  @jakarta.annotation.Nonnull  private List<@Valid BulkCreateDealNoteRequest> createNoteRequests = new ArrayList<>();

  public BulkCreateDealNotesRequest() { 
  }

  public BulkCreateDealNotesRequest createNoteRequests(@jakarta.annotation.Nonnull List<@Valid BulkCreateDealNoteRequest> createNoteRequests) {
    this.createNoteRequests = createNoteRequests;
    return this;
  }

  public BulkCreateDealNotesRequest addCreateNoteRequestsItem(BulkCreateDealNoteRequest createNoteRequestsItem) {
    if (this.createNoteRequests == null) {
      this.createNoteRequests = new ArrayList<>();
    }
    this.createNoteRequests.add(createNoteRequestsItem);
    return this;
  }

  /**
   * List of requests to create deal notes. Each request must not be null and must contain valid data.
   * @return createNoteRequests
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Valid
 @Size(min=1,max=1000)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "List of requests to create deal notes. Each request must not be null and must contain valid data.")
  @JsonProperty(JSON_PROPERTY_CREATE_NOTE_REQUESTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public List<@Valid BulkCreateDealNoteRequest> getCreateNoteRequests() {
    return createNoteRequests;
  }


  @JsonProperty(JSON_PROPERTY_CREATE_NOTE_REQUESTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCreateNoteRequests(@jakarta.annotation.Nonnull List<@Valid BulkCreateDealNoteRequest> createNoteRequests) {
    this.createNoteRequests = createNoteRequests;
  }

  /**
   * Return true if this BulkCreateDealNotesRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BulkCreateDealNotesRequest bulkCreateDealNotesRequest = (BulkCreateDealNotesRequest) o;
    return Objects.equals(this.createNoteRequests, bulkCreateDealNotesRequest.createNoteRequests);
  }

  @Override
  public int hashCode() {
    return Objects.hash(createNoteRequests);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BulkCreateDealNotesRequest {\n");
    sb.append("    createNoteRequests: ").append(toIndentedString(createNoteRequests)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

    public static class Builder {
    
        private BulkCreateDealNotesRequest instance;
    
        public Builder() {
          this(new BulkCreateDealNotesRequest());
        }
    
        protected Builder(BulkCreateDealNotesRequest instance) {
          this.instance = instance;
        }
    
        public BulkCreateDealNotesRequest.Builder createNoteRequests(List<BulkCreateDealNoteRequest> createNoteRequests) {
              this.instance.createNoteRequests = createNoteRequests;
          return this;
        }
        
    
        /**
        * returns a built BulkCreateDealNotesRequest instance.
        *
        * The builder is not reusable.
        */
        public BulkCreateDealNotesRequest build() {
          try {
            return this.instance;
          } finally {
            // ensure that this.instance is not reused
            this.instance = null;
          }
        }
    
        @Override
        public String toString() {
          return getClass() + "=(" + instance + ")";
        }
      }
    
      /**
      * Create a builder with no initialized field.
      */
      public static BulkCreateDealNotesRequest.Builder builder() {
        return new BulkCreateDealNotesRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public BulkCreateDealNotesRequest.Builder toBuilder() {
        return new BulkCreateDealNotesRequest.Builder()
          .createNoteRequests(getCreateNoteRequests());
      }
}

