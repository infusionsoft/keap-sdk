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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * AddToAutomationSequenceResponse
 */
@JsonPropertyOrder({
  AddToAutomationSequenceResponse.JSON_PROPERTY_ADD_TO_AUTOMATION_SEQUENCE_RESULTS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class AddToAutomationSequenceResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADD_TO_AUTOMATION_SEQUENCE_RESULTS = "add_to_automation_sequence_results";
  @jakarta.annotation.Nullable  private Map<String, String> addToAutomationSequenceResults = new HashMap<>();

  public AddToAutomationSequenceResponse() { 
  }

  public AddToAutomationSequenceResponse addToAutomationSequenceResults(@jakarta.annotation.Nullable Map<String, String> addToAutomationSequenceResults) {
    this.addToAutomationSequenceResults = addToAutomationSequenceResults;
    return this;
  }

  public AddToAutomationSequenceResponse putAddToAutomationSequenceResultsItem(String key, String addToAutomationSequenceResultsItem) {
    if (this.addToAutomationSequenceResults == null) {
      this.addToAutomationSequenceResults = new HashMap<>();
    }
    this.addToAutomationSequenceResults.put(key, addToAutomationSequenceResultsItem);
    return this;
  }

  /**
   * Get addToAutomationSequenceResults
   * @return addToAutomationSequenceResults
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ADD_TO_AUTOMATION_SEQUENCE_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Map<String, String> getAddToAutomationSequenceResults() {
    return addToAutomationSequenceResults;
  }


  @JsonProperty(JSON_PROPERTY_ADD_TO_AUTOMATION_SEQUENCE_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAddToAutomationSequenceResults(@jakarta.annotation.Nullable Map<String, String> addToAutomationSequenceResults) {
    this.addToAutomationSequenceResults = addToAutomationSequenceResults;
  }

  /**
   * Return true if this AddToAutomationSequenceResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AddToAutomationSequenceResponse addToAutomationSequenceResponse = (AddToAutomationSequenceResponse) o;
    return Objects.equals(this.addToAutomationSequenceResults, addToAutomationSequenceResponse.addToAutomationSequenceResults);
  }

  @Override
  public int hashCode() {
    return Objects.hash(addToAutomationSequenceResults);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AddToAutomationSequenceResponse {\n");
    sb.append("    addToAutomationSequenceResults: ").append(toIndentedString(addToAutomationSequenceResults)).append("\n");
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
    
        private AddToAutomationSequenceResponse instance;
    
        public Builder() {
          this(new AddToAutomationSequenceResponse());
        }
    
        protected Builder(AddToAutomationSequenceResponse instance) {
          this.instance = instance;
        }
    
        public AddToAutomationSequenceResponse.Builder addToAutomationSequenceResults(Map<String, String> addToAutomationSequenceResults) {
              this.instance.addToAutomationSequenceResults = addToAutomationSequenceResults;
          return this;
        }
        
    
        /**
        * returns a built AddToAutomationSequenceResponse instance.
        *
        * The builder is not reusable.
        */
        public AddToAutomationSequenceResponse build() {
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
      public static AddToAutomationSequenceResponse.Builder builder() {
        return new AddToAutomationSequenceResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AddToAutomationSequenceResponse.Builder toBuilder() {
        return new AddToAutomationSequenceResponse.Builder()
          .addToAutomationSequenceResults(getAddToAutomationSequenceResults());
      }
}

