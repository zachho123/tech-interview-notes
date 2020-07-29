const LinkedListNode = require('../LinkedListNode');

describe('LinkedListNode', () => {
    it('should create a node with a number as value', () => {
        const node = new LinkedListNode(1);

        expect(node.value).toBe(1);
        expect(node.next).toBeNull();
    });

    it('should create a node with a string as value', () => {
        const node = new LinkedListNode('teststring');

        expect(node.value).toBe('teststring');
        expect(node.next).toBeNull();
    });

    it('should create a node with a boolean as value', () => {
        const node = new LinkedListNode(true);

        expect(node.value).toBe(true);
        expect(node.next).toBeNull();
    });

    it('should create a node with an object as value', () => {
        const myobj = { value: 1, key: 'test' };
        const node = new LinkedListNode(myobj);

        expect(node.value.value).toBe(1);
        expect(node.value.key).toBe('test');
        expect(node.next).toBeNull();
    });

    it('should link nodes together', () => {
        const node2 = new LinkedListNode(2);
        const node1 = new LinkedListNode(1, node2);

        expect(node1.next).toBe(node2);
        expect(node2.next).toBeNull();
    });

    it('should convert a node to string', () => {
        const node = new LinkedListNode(1);

        expect(node.toString()).toBe('1');
    });

    it('should convert node to string with custom toString callback', () => {
        const myobj = { value: 1, key: 'test' };
        const node = new LinkedListNode(myobj);
        const callback = (myobj) => `value: ${myobj.value}, key: ${myobj.key}`;

        expect(node.toString(callback)).toBe('value: 1, key: test');
    });
});