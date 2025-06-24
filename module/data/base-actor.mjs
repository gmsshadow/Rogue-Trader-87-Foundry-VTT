export default class rt87ActorBase extends foundry.abstract
  .TypeDataModel {
  static LOCALIZATION_PREFIXES = ["RT87.Actor.base"];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.wounds = new fields.SchemaField({
      value: new fields.NumberField({
        ...requiredInteger,
        initial: 1,
        min: 0,
      }),
      max: new fields.NumberField({ ...requiredInteger, initial: 1 }),
    });
    schema.power = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 0 }),
    });
    schema.biography = new fields.HTMLField();

    return schema;
  }
}
