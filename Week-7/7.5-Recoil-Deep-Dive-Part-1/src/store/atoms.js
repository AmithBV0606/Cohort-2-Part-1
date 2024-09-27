import { atom } from "recoil";

export const myNetworkAtom = atom({
    key:"myNetworkAtom",
    default: 102
});

export const jobsAtom = atom({
    key:"jobsAtom",
    default: 0
});

export const messagingAtom = atom({
    key:"messagingAtom",
    default: 12
});

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default: 0
});