import './dist'

import {Action, Common} from './dist';

const sdk: Common = window.AFREECA.ext()

sdk?.chat.listen((action, payload) => {

})

sdk?.broadcast.listen((action, message, fromId) => {

})