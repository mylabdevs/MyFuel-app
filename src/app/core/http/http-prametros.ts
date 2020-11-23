export interface HttpParametrosJson {
    endereco?: string;
    body?: any;
    header?: any;
    path_parameter?: string;
    query_parameter?: string
}

export default class HttpParametros {
    private _url: string;
    private _body: any;
    private _header: any;

    private constructor(url: string, body: string, header?: any) {
        this._url = url;
        this._body = body;
        this._header = header;
    }

    static builder(): HttpParametrosBuilder {
        return new HttpParametrosBuilder();
    }

    static deJson(json: HttpParametrosJson): HttpParametros {
        const url = (json.endereco)
            + (json.path_parameter ? '/' + json.path_parameter : '')
            + (json.query_parameter ? '?' + json.query_parameter : '');

        return new HttpParametros(url, json.body, json.header);
    }


    public get url(): string {
        return this._url;
    }


    public get header(): any {
        return this._header;
    }


    public get body(): any {
        return this._body;
    }

}

export class HttpParametrosBuilder {
    private json: HttpParametrosJson;

    constructor() {
        this.json = <HttpParametrosJson>{}
    }

    comEndereco(endereco: string): HttpParametrosBuilder {
        this.json.endereco = endereco;
        return this;
    }

    comBody(body: any): HttpParametrosBuilder {
        this.json.body = body;
        return this;
    }

    comHeader(header: any): HttpParametrosBuilder {
        this.json.header = header;
        return this;
    }

    comPathParameter(path_parameter: string): HttpParametrosBuilder {
        this.json.path_parameter = path_parameter;
        return this;
    }

    comQueryParameter(query_parameter: string): HttpParametrosBuilder {
        this.json.query_parameter = query_parameter;
        return this;
    }

    build(): HttpParametros {
        return HttpParametros.deJson(this.json);
    }

}
