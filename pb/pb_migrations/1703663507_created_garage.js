/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gnq047uylzcqqyb",
    "created": "2023-12-27 07:51:47.889Z",
    "updated": "2023-12-27 07:51:47.889Z",
    "name": "garage",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "frxcsjgt",
        "name": "vehicle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "czaqh5ub",
        "name": "mileage",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gnq047uylzcqqyb");

  return dao.deleteCollection(collection);
})
