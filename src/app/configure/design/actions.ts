"use server";

import { db } from "@/db";
import {
  CaseFinish,
  CaseMaterial,
  ModelColors,
  PhoneModel,
} from "@prisma/client";

//remote procedure call (RPC): only run on the server

export type saveConfigArgs = {
  color: ModelColors;
  finish: CaseFinish;
  material: CaseMaterial;
  model: PhoneModel;
  configId: string;
};

export async function saveConfig({
  color,
  finish,
  material,
  model,
  configId,
}: {
  color: ModelColors;
  finish: CaseFinish;
  material: CaseMaterial;
  model: PhoneModel;
  configId: string;
}) {
  await db.configuration.update({
    where: {
      id: configId,
    },
    data: { color, finish, material, model },
  });
}
