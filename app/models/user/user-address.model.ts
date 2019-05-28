import { UserAddressGeoModel } from "./user-address-geo.model";

export class UserAddressModel {

    private street: string;
    private suite: string;
    private city: string;
    private zipcode: string;
    private geo: UserAddressGeoModel;      
}