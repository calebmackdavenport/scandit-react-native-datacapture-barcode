import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { DataCaptureContext, DataCaptureMode } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { BarcodeCaptureFeedback } from './BarcodeCaptureFeedback';
import { BarcodeCaptureListener } from './BarcodeCaptureListener';
import { BarcodeCaptureSettings } from './BarcodeCaptureSettings';
export declare class BarcodeCapture extends DefaultSerializeable implements DataCaptureMode {
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    get feedback(): BarcodeCaptureFeedback;
    set feedback(feedback: BarcodeCaptureFeedback);
    static get recommendedCameraSettings(): CameraSettings;
    private type;
    private _isEnabled;
    private _feedback;
    private settings;
    private privateContext;
    private get _context();
    private set _context(value);
    private listeners;
    private listenerProxy;
    private isInListenerCallback;
    static forContext(context: DataCaptureContext | null, settings: BarcodeCaptureSettings): BarcodeCapture;
    private constructor();
    applySettings(settings: BarcodeCaptureSettings): Promise<void>;
    addListener(listener: BarcodeCaptureListener): void;
    removeListener(listener: BarcodeCaptureListener): void;
    private didChange;
}
