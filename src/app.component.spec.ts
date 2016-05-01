/// <reference path="../typings/main/ambient/jasmine/jasmine.d.ts" />

import { it, describe, expect, TestComponentBuilder, injectAsync, setBaseTestProviders, beforeEachProviders } from "angular2/testing";
import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS } from 'angular2/platform/testing/browser';
import { AppComponent } from "./app.component";

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

describe('AppComponent', () => {
    beforeEachProviders(() => [ AppComponent ]);
    
    describe('Title', () => {
        it('should be Transport', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb.createAsync(AppComponent).then((fixture) => {
                expect(fixture.componentInstance.title).toEqual('Transport');
            });
        })); 
    });
});