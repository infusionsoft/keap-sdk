# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.812056
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_core_v2_client.models.funnel_integration_action import FunnelIntegrationAction
from typing import Optional, Set
from typing_extensions import Self

class CreateFunnelIntegrationRequest(BaseModel):
    """
    CreateFunnelIntegrationRequest
    """ # noqa: E501
    base_url: Optional[StrictStr] = Field(default=None, description="The base URL of the integration, that will be used to call the integration related REST endpoints.")
    context: Optional[StrictStr] = Field(default=None, description="The context of the integration, that will be used internally to identify the integration.")
    enabled: Optional[StrictBool] = Field(default=None, description="The flag to enable or disable the integration.")
    funnel_integration_actions: Optional[List[FunnelIntegrationAction]] = Field(default=None, description="The list of actions that will be installed with the integration.")
    funnel_integration_triggers: Optional[List[FunnelIntegrationAction]] = Field(default=None, description="The list of triggers that will be installed with the integration.")
    name: Optional[StrictStr] = Field(default=None, description="The name of the integration, that will be used internally to identify the integration.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["base_url", "context", "enabled", "funnel_integration_actions", "funnel_integration_triggers", "name"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of CreateFunnelIntegrationRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * Fields in `self.additional_properties` are added to the output dict.
        """
        excluded_fields: Set[str] = set([
            "additional_properties",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in funnel_integration_actions (list)
        _items = []
        if self.funnel_integration_actions:
            for _item_funnel_integration_actions in self.funnel_integration_actions:
                if _item_funnel_integration_actions:
                    _items.append(_item_funnel_integration_actions.to_dict())
            _dict['funnel_integration_actions'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in funnel_integration_triggers (list)
        _items = []
        if self.funnel_integration_triggers:
            for _item_funnel_integration_triggers in self.funnel_integration_triggers:
                if _item_funnel_integration_triggers:
                    _items.append(_item_funnel_integration_triggers.to_dict())
            _dict['funnel_integration_triggers'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CreateFunnelIntegrationRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "base_url": obj.get("base_url"),
            "context": obj.get("context"),
            "enabled": obj.get("enabled"),
            "funnel_integration_actions": [FunnelIntegrationAction.from_dict(_item) for _item in obj["funnel_integration_actions"]] if obj.get("funnel_integration_actions") is not None else None,
            "funnel_integration_triggers": [FunnelIntegrationAction.from_dict(_item) for _item in obj["funnel_integration_triggers"]] if obj.get("funnel_integration_triggers") is not None else None,
            "name": obj.get("name")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


