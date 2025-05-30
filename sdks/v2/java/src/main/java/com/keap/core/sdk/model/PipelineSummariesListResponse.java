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
import com.keap.core.sdk.model.PipelineSummary;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Response for a list of pipeline summaries.
 */
@Schema(description = "Response for a list of pipeline summaries.")
@JsonPropertyOrder({
  PipelineSummariesListResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  PipelineSummariesListResponse.JSON_PROPERTY_PIPELINE_SUMMARIES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class PipelineSummariesListResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_PIPELINE_SUMMARIES = "pipeline_summaries";
  @jakarta.annotation.Nullable  private List<@Valid PipelineSummary> pipelineSummaries = new ArrayList<>();

  public PipelineSummariesListResponse() { 
  }

  public PipelineSummariesListResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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


  public PipelineSummariesListResponse pipelineSummaries(@jakarta.annotation.Nullable List<@Valid PipelineSummary> pipelineSummaries) {
    this.pipelineSummaries = pipelineSummaries;
    return this;
  }

  public PipelineSummariesListResponse addPipelineSummariesItem(PipelineSummary pipelineSummariesItem) {
    if (this.pipelineSummaries == null) {
      this.pipelineSummaries = new ArrayList<>();
    }
    this.pipelineSummaries.add(pipelineSummariesItem);
    return this;
  }

  /**
   * The list of pipeline summaries.
   * @return pipelineSummaries
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The list of pipeline summaries.")
  @JsonProperty(JSON_PROPERTY_PIPELINE_SUMMARIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid PipelineSummary> getPipelineSummaries() {
    return pipelineSummaries;
  }


  @JsonProperty(JSON_PROPERTY_PIPELINE_SUMMARIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPipelineSummaries(@jakarta.annotation.Nullable List<@Valid PipelineSummary> pipelineSummaries) {
    this.pipelineSummaries = pipelineSummaries;
  }

  /**
   * Return true if this PipelineSummariesListResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PipelineSummariesListResponse pipelineSummariesListResponse = (PipelineSummariesListResponse) o;
    return Objects.equals(this.nextPageToken, pipelineSummariesListResponse.nextPageToken) &&
        Objects.equals(this.pipelineSummaries, pipelineSummariesListResponse.pipelineSummaries);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, pipelineSummaries);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PipelineSummariesListResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    pipelineSummaries: ").append(toIndentedString(pipelineSummaries)).append("\n");
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
    
        private PipelineSummariesListResponse instance;
    
        public Builder() {
          this(new PipelineSummariesListResponse());
        }
    
        protected Builder(PipelineSummariesListResponse instance) {
          this.instance = instance;
        }
    
        public PipelineSummariesListResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public PipelineSummariesListResponse.Builder pipelineSummaries(List<PipelineSummary> pipelineSummaries) {
              this.instance.pipelineSummaries = pipelineSummaries;
          return this;
        }
        
    
        /**
        * returns a built PipelineSummariesListResponse instance.
        *
        * The builder is not reusable.
        */
        public PipelineSummariesListResponse build() {
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
      public static PipelineSummariesListResponse.Builder builder() {
        return new PipelineSummariesListResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PipelineSummariesListResponse.Builder toBuilder() {
        return new PipelineSummariesListResponse.Builder()
          .nextPageToken(getNextPageToken())
          .pipelineSummaries(getPipelineSummaries());
      }
}

