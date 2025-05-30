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
import com.keap.core.sdk.model.AutomationCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListAutomationCategoryResponse
 */
@JsonPropertyOrder({
  ListAutomationCategoryResponse.JSON_PROPERTY_AUTOMATION_CATEGORIES,
  ListAutomationCategoryResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class ListAutomationCategoryResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AUTOMATION_CATEGORIES = "automation_categories";
  @jakarta.annotation.Nullable  private List<@Valid AutomationCategory> automationCategories = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListAutomationCategoryResponse() { 
  }

  public ListAutomationCategoryResponse automationCategories(@jakarta.annotation.Nullable List<@Valid AutomationCategory> automationCategories) {
    this.automationCategories = automationCategories;
    return this;
  }

  public ListAutomationCategoryResponse addAutomationCategoriesItem(AutomationCategory automationCategoriesItem) {
    if (this.automationCategories == null) {
      this.automationCategories = new ArrayList<>();
    }
    this.automationCategories.add(automationCategoriesItem);
    return this;
  }

  /**
   * Get automationCategories
   * @return automationCategories
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AUTOMATION_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid AutomationCategory> getAutomationCategories() {
    return automationCategories;
  }


  @JsonProperty(JSON_PROPERTY_AUTOMATION_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAutomationCategories(@jakarta.annotation.Nullable List<@Valid AutomationCategory> automationCategories) {
    this.automationCategories = automationCategories;
  }


  public ListAutomationCategoryResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Get nextPageToken
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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

  /**
   * Return true if this ListAutomationCategoryResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListAutomationCategoryResponse listAutomationCategoryResponse = (ListAutomationCategoryResponse) o;
    return Objects.equals(this.automationCategories, listAutomationCategoryResponse.automationCategories) &&
        Objects.equals(this.nextPageToken, listAutomationCategoryResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(automationCategories, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListAutomationCategoryResponse {\n");
    sb.append("    automationCategories: ").append(toIndentedString(automationCategories)).append("\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
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
    
        private ListAutomationCategoryResponse instance;
    
        public Builder() {
          this(new ListAutomationCategoryResponse());
        }
    
        protected Builder(ListAutomationCategoryResponse instance) {
          this.instance = instance;
        }
    
        public ListAutomationCategoryResponse.Builder automationCategories(List<AutomationCategory> automationCategories) {
              this.instance.automationCategories = automationCategories;
          return this;
        }
            public ListAutomationCategoryResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListAutomationCategoryResponse instance.
        *
        * The builder is not reusable.
        */
        public ListAutomationCategoryResponse build() {
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
      public static ListAutomationCategoryResponse.Builder builder() {
        return new ListAutomationCategoryResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListAutomationCategoryResponse.Builder toBuilder() {
        return new ListAutomationCategoryResponse.Builder()
          .automationCategories(getAutomationCategories())
          .nextPageToken(getNextPageToken());
      }
}

