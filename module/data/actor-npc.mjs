import rt87ActorBase from './base-actor.mjs';

export default class rt87NPC extends rt87ActorBase {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    'RT87.Actor.NPC',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.cr = new fields.NumberField({
      ...requiredInteger,
      initial: 1,
      min: 0,
    });

    return schema;
  }

  prepareDerivedData() {
    this.xp = this.cr * this.cr * 100;
  }
}
