
import { removeElement } from "./browser";
import { Refs } from "./Refs";
import { diffProps } from "./diffProps";
import { processFormElement, formElements } from "./ControlledComponent";
import { returnFalse, returnTrue} from "../src/util";
export function DOMUpdater(vnode) {
    this.name = vnode.type;
    this._states = ["resolve"];
    this.vnode = vnode;
    vnode.updater = this;
    this._mountOrder = Refs.mountOrder++;
}

DOMUpdater.prototype = {
    addState: function(state) {
        var states = this._states;
        if (states[states.length - 1] !== state) {
            states.push(state);
        }
    },
    transition(updateQueue) {
        var state = this._states.shift();
        if (state) {
            this[state](updateQueue);
        }
    },
    init(updateQueue){
        updateQueue.push(this);
    },
    isMounted: returnFalse,
    resolve(){
        var vnode = this.vnode;
        var dom = vnode.stateNode;
        var { type, props} = vnode;
        diffProps(dom, this.oldProps || {}, props, vnode);
        if (formElements[type]) {
            processFormElement(vnode, dom, props);
        }
        this.isMounted = returnTrue;
        Refs.fireRef(vnode, dom);
       
    },
    dispose(){
        var vnode = this.vnode;
        Refs.fireRef(vnode,null);
        removeElement(vnode.stateNode);
        delete vnode.stateNode;
    }
   
};
