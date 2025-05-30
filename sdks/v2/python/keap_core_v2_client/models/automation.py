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

from datetime import datetime
from pydantic import BaseModel, ConfigDict, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_core_v2_client.models.automation_lock_status import AutomationLockStatus
from typing import Optional, Set
from typing_extensions import Self

class Automation(BaseModel):
    """
    Automation
    """ # noqa: E501
    active_contacts: Optional[StrictInt] = None
    categories: Optional[List[StrictStr]] = None
    current_edit_lock_status: Optional[AutomationLockStatus] = None
    error_message: Optional[StrictStr] = None
    id: Optional[StrictStr] = None
    locked: Optional[StrictBool] = None
    publication_date: Optional[StrictStr] = None
    published_by: Optional[StrictStr] = None
    published_date: Optional[datetime] = None
    published_timezone: Optional[StrictStr] = None
    status: Optional[StrictStr] = None
    title: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["active_contacts", "categories", "current_edit_lock_status", "error_message", "id", "locked", "publication_date", "published_by", "published_date", "published_timezone", "status", "title"]

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
        """Create an instance of Automation from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of current_edit_lock_status
        if self.current_edit_lock_status:
            _dict['current_edit_lock_status'] = self.current_edit_lock_status.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Automation from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "active_contacts": obj.get("active_contacts"),
            "categories": obj.get("categories"),
            "current_edit_lock_status": AutomationLockStatus.from_dict(obj["current_edit_lock_status"]) if obj.get("current_edit_lock_status") is not None else None,
            "error_message": obj.get("error_message"),
            "id": obj.get("id"),
            "locked": obj.get("locked"),
            "publication_date": obj.get("publication_date"),
            "published_by": obj.get("published_by"),
            "published_date": obj.get("published_date"),
            "published_timezone": obj.get("published_timezone"),
            "status": obj.get("status"),
            "title": obj.get("title")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


