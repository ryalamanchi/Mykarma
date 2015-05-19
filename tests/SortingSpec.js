describe ("Simple softing test", function()
    {
        it("array sort is support to be in a certain order",function()
            {
                var list = [3, 2, 6, 5, 1, 4]
                arraySort(list);
                expect(list[0]).toBe(1);
            });
    }
)