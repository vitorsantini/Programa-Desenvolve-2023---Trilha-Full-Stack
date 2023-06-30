import { View } from "./view.js";

export class MensagemView extends View<string>{

    protected template(model: string): string {
        return `
            <p class="alert slert-info">${model}</p>
        `;
    }
}