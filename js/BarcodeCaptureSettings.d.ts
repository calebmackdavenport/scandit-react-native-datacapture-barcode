import { LocationSelection } from 'scandit-react-native-datacapture-core/js/LocationSelection';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Symbology } from './Symbology';
import { SymbologySettings } from './Symbology+Related';
export declare class BarcodeCaptureSettings extends DefaultSerializeable {
    codeDuplicateFilter: number;
    locationSelection: Optional<LocationSelection>;
    private properties;
    private symbologies;
    get enabledSymbologies(): Symbology[];
    constructor();
    settingsForSymbology(symbology: Symbology): SymbologySettings;
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    enableSymbologies(symbologies: Symbology[]): void;
    enableSymbology(symbology: Symbology, enabled: boolean): void;
}
