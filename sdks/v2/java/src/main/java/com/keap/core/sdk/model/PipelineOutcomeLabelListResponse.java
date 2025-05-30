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
import com.keap.core.sdk.model.PipelineOutcomeLabel;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Represents a response containing a list of pipeline outcome labels.
 */
@Schema(description = "Represents a response containing a list of pipeline outcome labels.")
@JsonPropertyOrder({
  PipelineOutcomeLabelListResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  PipelineOutcomeLabelListResponse.JSON_PROPERTY_OUTCOME_LABELS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class PipelineOutcomeLabelListResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_OUTCOME_LABELS = "outcome_labels";
  @jakarta.annotation.Nullable  private List<@Valid PipelineOutcomeLabel> outcomeLabels = new ArrayList<>();

  public PipelineOutcomeLabelListResponse() { 
  }

  public PipelineOutcomeLabelListResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Token for the next page of results.
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Token for the next page of results.")
  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextPageToken() {
    return nextPageToken;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
  }


  public PipelineOutcomeLabelListResponse outcomeLabels(@jakarta.annotation.Nullable List<@Valid PipelineOutcomeLabel> outcomeLabels) {
    this.outcomeLabels = outcomeLabels;
    return this;
  }

  public PipelineOutcomeLabelListResponse addOutcomeLabelsItem(PipelineOutcomeLabel outcomeLabelsItem) {
    if (this.outcomeLabels == null) {
      this.outcomeLabels = new ArrayList<>();
    }
    this.outcomeLabels.add(outcomeLabelsItem);
    return this;
  }

  /**
   * The list of outcome labels.
   * @return outcomeLabels
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The list of outcome labels.")
  @JsonProperty(JSON_PROPERTY_OUTCOME_LABELS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid PipelineOutcomeLabel> getOutcomeLabels() {
    return outcomeLabels;
  }


  @JsonProperty(JSON_PROPERTY_OUTCOME_LABELS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOutcomeLabels(@jakarta.annotation.Nullable List<@Valid PipelineOutcomeLabel> outcomeLabels) {
    this.outcomeLabels = outcomeLabels;
  }

  /**
   * Return true if this PipelineOutcomeLabelListResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PipelineOutcomeLabelListResponse pipelineOutcomeLabelListResponse = (PipelineOutcomeLabelListResponse) o;
    return Objects.equals(this.nextPageToken, pipelineOutcomeLabelListResponse.nextPageToken) &&
        Objects.equals(this.outcomeLabels, pipelineOutcomeLabelListResponse.outcomeLabels);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, outcomeLabels);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PipelineOutcomeLabelListResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    outcomeLabels: ").append(toIndentedString(outcomeLabels)).append("\n");
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
    
        private PipelineOutcomeLabelListResponse instance;
    
        public Builder() {
          this(new PipelineOutcomeLabelListResponse());
        }
    
        protected Builder(PipelineOutcomeLabelListResponse instance) {
          this.instance = instance;
        }
    
        public PipelineOutcomeLabelListResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public PipelineOutcomeLabelListResponse.Builder outcomeLabels(List<PipelineOutcomeLabel> outcomeLabels) {
              this.instance.outcomeLabels = outcomeLabels;
          return this;
        }
        
    
        /**
        * returns a built PipelineOutcomeLabelListResponse instance.
        *
        * The builder is not reusable.
        */
        public PipelineOutcomeLabelListResponse build() {
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
      public static PipelineOutcomeLabelListResponse.Builder builder() {
        return new PipelineOutcomeLabelListResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PipelineOutcomeLabelListResponse.Builder toBuilder() {
        return new PipelineOutcomeLabelListResponse.Builder()
          .nextPageToken(getNextPageToken())
          .outcomeLabels(getOutcomeLabels());
      }
}

