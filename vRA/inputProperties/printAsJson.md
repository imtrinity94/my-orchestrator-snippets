```javascript
System.log(JSON.stringify(inputProperties, null, 2));
```

Output
```javascript
{
  "componentId": "internal",
  "endpointId": "d098094c-5e88-4428-bcca-83e5ab6e9f6b",
  "externalIds": [
    "internal-342",                                      // first VM hostname 
    "internal-343"                                       // second VM hostname
  ],
  "blueprintId": "d2ce10f3-6671-4588-9bf7-9d4b47085865",
  "tags": {
    "project": "Prod1"
  },
  "customProperties": {
    "flavor": "small",
    "neglectPowerOffVms": "false",
    "image": "photon",
    "zone_overlapping_migrated": "true",
    "count": "2",                                        // two VMs requested
    "project": "ffab9ffd-a072-4617-bbb4-54101b3b5dd1",
    "flavorMappingName": "small",
    "isSimulate": "false"
  },
  "networkProfileIds": [
    "3aca5c1f-443f-42fa-9b4b-66e853ad11f3",              // first VM selected network profile
    "3aca5c1f-443f-42fa-9b4b-66e853ad11f3"               // second VM selected network profile
  ],
  "componentTypeId": "Cloud.vSphere.Machine",
  "requestId": "3bdde4cf-3b12-4b43-90d8-7ccf2c47b1b6",
  "deploymentId": "fa4b9df4-9664-474a-a3f2-056db527e6e3",
  "zoneId": "d8666ddd-804e-4587-a37e-58b72708743d",
  "networkSelectionIds": [
    [                                                    // first VM
      [                                                  // first NIC
        "c2168e8f-62aa-45e2-9dd9-502d22359214",          // matching network in network profile
        "6bf0d8fb-6f39-4a43-b5d9-56a371030171"           // matching network in network profile
      ],
      [                                                  // second NIC
        "dd65009b-3900-46ee-a6a2-d3226d755f4b"           // matching network in network profile
      ]
    ],
    [                                                    // second VM
      [                                                  // first NIC
        "c2168e8f-62aa-45e2-9dd9-502d22359214",          // matching network in network profile
        "6bf0d8fb-6f39-4a43-b5d9-56a371030171"           // matching network in network profile
      ],
      [                                                  // second NIC
        "dd65009b-3900-46ee-a6a2-d3226d755f4b"           // matching network in network profile
      ]
    ]
  ],
  "projectId": "ffab9ffd-a072-4617-bbb4-54101b3b5dd1",
  "resourceIds": [
    "c084c3cb-2506-4477-b738-6debd7ac3827",
    "483de42b-6a13-437e-90f9-e1e7a9cbc158"
  ]
}
```
