export class Image {

    id: string | null = null;
    name: string | null = null;
    description: string | null = null;
    labels: string[] = [];
    image_src: string | null = null;;



    constructor() {}

    static create(json: any): Image {
        const event = new Image();
        if (json) {
            event.id = json._id ? json._id : null;
            event.name = json.name ? json.name : null;
            event.description = json.description ? json.description : null;
            event.labels = json.labels ? json.labels : [];
            event.image_src = json.image_src ? json.image_src : null;
        }

        return event;
    }

}