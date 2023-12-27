/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("38eltv1abjvtlo6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehqbviip",
    "name": "at_miles",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("38eltv1abjvtlo6")

  // remove
  collection.schema.removeField("ehqbviip")

  return dao.saveCollection(collection)
})
