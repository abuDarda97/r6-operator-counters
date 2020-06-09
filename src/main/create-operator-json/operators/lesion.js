'use strict';

import counterType from '../core/counterTypeEnums';
import operatorId from '../core/operatorIdEnum';
import Operator from '../core/operatorFactory';
import r6operators from "r6operators";

let lesion = new Operator(r6operators.lesion, operatorId.lesion, "Operation Blood Orchid");
lesion.addCounterNode(operatorId.blitz, counterType.soft, "Blitz cannot sprint whenever stuck with a Lesion Gu needle.");
lesion.addCounterNode(operatorId.montagne, counterType.soft, "Montagne can be put in a very vulnerable position when stuck with a Lesion Gu needle.");

export default lesion