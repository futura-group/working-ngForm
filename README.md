# Angular handle Enter keypress in any area & ngForm / ngSubmit fixes

> ng-form fixes to enable them to work the way a normal form tag does

> With no jQuery dependency!

## [DEMO : View it in Action!](http://mcpdesigns.github.io/ngForm-handle-Enter-Keypress/)

#### Choose what the Enter key does in any given area in Angular - run any scoped function you want

Helpful with `<ng-form>` tags since they don't automatically handle Enter keys for submitting the form.
This can also be used anywhere to simply run a specific function on the scope that's passed into the attribute.

>  Check out demo.html to see it in action

#### ngForm directive useage: (Automatically calls any input/button with type="submit")

    <ng-form>
        <!-- some inputs -->
        <button type="submit"
            ng-click="vmDemo.submitThisForm()">
            Submit Button
        </button>
    </ng-form>

#### ngSubmit functionality fix for ngForm:

    <ng-form ng-submit="vmDemo.submitThisForm()">
        <!-- some inputs -->
        <button type="submit">
            Submit Button
        </button>
    </ng-form>


#### Handle Enter keypress on any parent item:

    <div on-enter="vmDemo.submitThisForm()">
        <!-- some inputs -->
        <button type="submit"
            ng-click="vmDemo.submitThisForm()">
            SAVE
        </button>
    </div>
