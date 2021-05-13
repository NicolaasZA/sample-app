export interface Barcode {
    type: string;
    data: string;
    rawData: string;
    hex: string;
    rawHex: string;
    bytesHex: string;
    bytes: number[];

    decoded?: string;
}

export enum TorchState {
    On = 'on',
    Off = 'off',
    Auto = 'auto'
}

export enum CameraPosition {
    WorldFacing = 'worldFacing',
    UserFacing = 'userFacing',
    Unspecified = 'unspecified'
}

export enum FrameSourceState {
    BootingUp = 'bootingUp',
    GoingToSleep = 'goingToSleep',
    Off = 'off',
    On = 'on',
    ShuttingDown = 'shuttingDown',
    Standby = 'standby',
    Starting = 'starting',
    Stopping = 'stopping',
    WakingUp = 'wakingUp'
}

export interface Camera {
    desiredTorchState: TorchState;

    getIsTorchAvailable(): any;
    switchToDesiredState(state: FrameSourceState): void;

    addListener(listener: any): void;
    removeListener(listener: any): void;
    applySettings(settings: any): void;
}
